import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function SavedImaginate() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSaved();
  }, []);

  async function fetchSaved() {
    const { data, error } = await supabase
      .from("imagination_space")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setSaved(data || []);
    setLoading(false);
  }

  if (loading) {
    return <p style={{ color: "#888", padding: 40 }}>Loading…</p>;
  }

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>IMAGINATE</h2>
        <nav style={styles.nav}>
          <div
            style={styles.navItem}
            onClick={() => navigate("/home")}
          >
            🏠 Home
          </div>

          <div
            style={styles.navItem}
            onClick={() => navigate("/imaginate")}
          >
            ➕ Create
          </div>

          <div
            style={styles.navItem}
            onClick={() => navigate("/")}
          >
            📄 Landing
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        <h1 style={styles.title}>Imagination Space</h1>

        <div style={styles.grid}>
          {saved.map((item) => (
            <div key={item.id} style={styles.card}>
              <img
                src={item.image_url}
                alt={item.prompt}
                style={styles.image}
              />
              <div style={styles.prompt}>{item.prompt}</div>
              <button style={styles.editBtn}>Edit</button>
            </div>
          ))}
        </div>
      </main>

      {/* Smile / Surprise */}
      <div style={styles.surprise}>
        <div style={styles.smile}>😊</div>
        <div style={styles.surpriseText}>Surprise me ✨</div>
      </div>
    </div>
  );
}

/* ---------------- styles ---------------- */ 
const styles = { 
  page: { 
    minHeight: "100vh", 
    background: "radial-gradient(circle at top, #0b1220, #000)", 
    padding: "16px", 
    color: "white", 
  }, 
  
  loadingWrap: { 
    minHeight: "100vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    background: "#000", 
  }, 
  
  topBar: { 
    display: "flex", 
    justifyContent: "space-between", 
    marginBottom: 16, 
  }, 
  
  navBtn: { 
    background: "rgba(255,255,255,0.12)", 
    border: "1px solid rgba(255,255,255,0.25)", 
    color: "white", 
    padding: "8px 14px", 
    borderRadius: 20, 
    fontSize: 14, 
    cursor: "pointer", 
  }, 
  
  title: { 
    textAlign: "center", 
    fontSize: "clamp(22px, 5vw, 32px)", 
    marginBottom: 24, 
    fontWeight: 800, 
  }, 
  
  emptyWrap: { 
    marginTop: 80, 
    textAlign: "center", 
    opacity: 0.9, 
  }, 
  
  smile: { 
    fontSize: 48, 
    marginBottom: 12, 
  }, 
  
  emptyText: { 
    fontSize: 16, 
    lineHeight: "24px", 
    color: "#aaa", 
  }, 
  
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", 
    gap: 16, 
  }, 
  
  card: { 
    background: "rgba(255,255,255,0.06)", 
    borderRadius: 16, 
    padding: 10, 
  }, 
  
  image: { 
    width: "100%", 
    aspectRatio: "1 / 1", 
    objectFit: "cover", 
    borderRadius: 12, 
  }, 
  
  prompt: { 
    marginTop: 8, 
    fontSize: 13, 
    color: "#ccc", 
    lineHeight: "18px", 
  }, 
  
  floatingBtn: { 
    position: "fixed", 
    bottom: 20, 
    right: 20, 
    width: 56, 
    height: 56, 
    borderRadius: "50%", 
    background: "linear-gradient(135deg,#ffe259,#ffa751)", 
    color: "#000", 
    border: "none", 
    fontSize: 28, 
    fontWeight: 900, 
    cursor: "pointer", 
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)", 
  }, 
};