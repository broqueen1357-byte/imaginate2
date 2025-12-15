// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // --------------------------
  // ADMIN PROTECTION (SUPER IMPORTANT)
  // --------------------------
  useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/login");
      return;
    }

    // Only YOU can access admin
    if (user.email !== "broqueen1357@gmail.com") {
      navigate("/");
      return;
    }

    // Load feedback only after verifying admin
    fetchFeedback();
    // poll every 12 sec (optional)
    const t = setInterval(fetchFeedback, 12000);
    return () => clearInterval(t);
  }

  // --------------------------
  // FETCH FEEDBACK
  // --------------------------
  async function fetchFeedback() {
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setFeedback(data || []);
    } catch (err) {
      setError(err.message || "Failed to load feedback");
    } finally {
      setLoading(false);
    }
  }

  // --------------------------
  // DELETE FEEDBACK
  // --------------------------
  async function handleDelete(id) {
    if (!confirm("Delete this feedback? This action cannot be undone.")) return;

    try {
      const { error } = await supabase
        .from("feedback")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setFeedback((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  }

  // --------------------------
  // MARK AS RESOLVED
  // requires column: resolved (boolean)
  // --------------------------
  async function handleMarkResolved(id) {
    try {
      const { error } = await supabase
        .from("feedback")
        .update({ resolved: true })
        .eq("id", id);

      if (error) throw error;

      setFeedback((prev) =>
        prev.map((f) =>
          f.id === id ? { ...f, resolved: true } : f
        )
      );
    } catch (err) {
      alert("Mark resolved failed: " + err.message);
    }
  }

  // --------------------------
  // UI
  // --------------------------
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 28,
        background: "radial-gradient(circle,#020816,#000814)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          color: "#dff9ff",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <h1 style={{ margin: 0, fontSize: 22 }}>
            Imaginate — Feedback Admin
          </h1>

          <div>
            <button
              onClick={() => navigate("/")}
              style={{
                marginRight: 10,
                padding: "8px 12px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Back to app
            </button>

            <button
              onClick={fetchFeedback}
              style={{ padding: "8px 12px", borderRadius: 8, cursor: "pointer" }}
            >
              Refresh
            </button>
          </div>
        </header>

        {/* STATUS TEXT */}
        <section style={{ marginTop: 20 }}>
          <p style={{ color: "#9fe8ff", marginBottom: 12 }}>
            Latest feedback shown first. Only you can view/delete/resolve.
          </p>

          {loading && <div style={{ color: "#bfefff" }}>Loading feedback…</div>}
          {error && <div style={{ color: "salmon" }}>{error}</div>}
          {!loading && feedback.length === 0 && (
            <div style={{ color: "#9aaeb7" }}>No feedback yet.</div>
          )}

          {/* LIST */}
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            {feedback.map((f) => (
              <div
                key={f.id}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.22))",
                  padding: 14,
                  borderRadius: 12,
                  border: "1px solid rgba(80,180,220,0.08)",
                  display: "flex",
                  gap: 12,
                }}
              >
                {/* COLUMN 1 */}
                <div style={{ flex: "0 0 110px", color: "#dff9ff" }}>
                  <div style={{ fontWeight: 800 }}>{f.name || "—"}</div>
                  <div style={{ fontSize: 12, color: "#88c8d9" }}>
                    {f.email || "—"}
                  </div>
                  <div style={{ fontSize: 12, color: "#88c8d9" }}>
                    {f.created_at
                      ? new Date(f.created_at).toLocaleString()
                      : ""}
                  </div>

                  {f.rating !== undefined && (
                    <div
                      style={{
                        marginTop: 6,
                        fontWeight: 700,
                        color: "#77c9ff",
                      }}
                    >
                      ★ {f.rating}
                    </div>
                  )}
                </div>

                {/* COLUMN 2 */}
                <div style={{ flex: 1, color: "#dff9ff" }}>
                  <div style={{ marginBottom: 8, whiteSpace: "pre-wrap" }}>
                    {f.message || "—"}
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={() =>
                        navigator.clipboard?.writeText(JSON.stringify(f))
                      }
                      style={{
                        padding: "8px 10px",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      Copy JSON
                    </button>

                    <button
                      onClick={() => handleMarkResolved(f.id)}
                      style={{
                        padding: "8px 10px",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      Mark resolved
                    </button>

                    <button
                      onClick={() => handleDelete(f.id)}
                      style={{
                        padding: "8px 10px",
                        borderRadius: 8,
                        cursor: "pointer",
                        background: "salmon",
                        color: "white",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* COLUMN 3 */}
                <div
                  style={{
                    flex: "0 0 110px",
                    textAlign: "right",
                    color: "#9fe8ff",
                  }}
                >
                  <div style={{ fontSize: 12 }}>
                    {f.user_id ? `user: ${f.user_id}` : ""}
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      fontWeight: 700,
                      color: f.resolved ? "#2ecc71" : "#ffb86b",
                    }}
                  >
                    {f.resolved ? "Resolved" : "Open"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
