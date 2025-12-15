import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function FeedbackModal({ onClose }) {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(4);
  const [status, setStatus] = useState("idle"); 
  // idle | sending | success

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setStatus("sending");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Login required");
      setStatus("idle");
      return;
    }

    const { error } = await supabase.from("feedback").insert({
      user_id: user.id,
      message: message,
      rating: rating,
      source: "quick_modal",
    });

    if (error) {
      console.error(error);
      alert("Error sending feedback");
      setStatus("idle");
      return;
    }

    // 🎯 Trigger success animation
    setTimeout(() => {
      setStatus("success");
    }, 300);

    // 🚪 Auto close modal (or navigate)
    setTimeout(() => {
      onClose();
      // navigate("/final-summary"); // OPTIONAL
    }, 1250);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>

        {/* ===== IDLE + SENDING CONTENT ===== */}
        {status !== "success" && (
          <div
            style={{
              ...styles.content,
              opacity: status === "sending" ? 0.85 : 1,
              transition: "opacity 200ms ease-in",
            }}
          >
            <h3 style={styles.title}>Quick Feedback</h3>

            <textarea
              disabled={status === "sending"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you think?"
              style={styles.textarea}
            />

            <div style={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => setRating(i + 1)}
                  style={{
                    fontSize: "24px",
                    cursor: "pointer",
                    color: i < rating ? "#4d7dff" : "#1a2750",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                ...styles.button,
                transform: status === "sending" ? "scale(0.96)" : "scale(1)",
                opacity: status === "sending" ? 0.85 : 1,
                transition: "all 100ms ease-out",
              }}
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </div>
        )}

        {/* ===== SUCCESS REWARD ===== */}
        {status === "success" && (
          <div style={styles.successWrap}>
            <div style={styles.glow}></div>
            <div style={styles.check}>✓</div>
            <p style={styles.successText}>Feedback received<br />Thank you</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    width: "340px",
    padding: "25px",
    borderRadius: "20px",
    background: "rgba(15,20,40,0.95)",
    boxShadow: "0 0 30px rgba(80,120,255,0.4)",
    position: "relative",
  },

  content: {
    transition: "opacity 200ms ease-in",
  },

  title: {
    textAlign: "center",
    marginBottom: "15px",
  },

  textarea: {
    width: "100%",
    height: "90px",
    borderRadius: "12px",
    padding: "12px",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    border: "1px solid rgba(80,120,255,0.4)",
    marginBottom: "15px",
    resize: "none",
  },

  stars: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "20px",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg,#3d6cff,#6f92ff)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },

  successWrap: {
    textAlign: "center",
    animation: "fadeIn 200ms ease-out",
  },

  glow: {
    width: "80px",
    height: "80px",
    margin: "0 auto",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(80,120,255,0.4), transparent)",
    animation: "scaleIn 300ms ease-out",
  },

  check: {
    fontSize: "36px",
    marginTop: "-55px",
    animation: "scaleIn 250ms ease-out",
  },

  successText: {
    marginTop: "15px",
    opacity: 0.9,
  },
};
