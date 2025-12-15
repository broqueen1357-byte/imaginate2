import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

export default function Feedback() {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitFeedback = async () => {
    if (isSubmitting) return;

    if (!rating) {
      alert("Please select a rating ⭐");
      return;
    }

    setIsSubmitting(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase.from("feedback").insert({
      user_id: user?.id || null,
      message: feedback || "No written feedback",
      rating,
      source: "feedback_page",
    });

    // success animation
    setTimeout(() => {
      setSuccess(true);
    }, 300);

    // exit
    setTimeout(() => {
      navigate("/home");
    }, 1300);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {!success ? (
          <>
            <h1 style={styles.title}>Your Voice Shapes Imaginate</h1>
            <p style={styles.subtitle}>Tell us what you think - your feedback builds the future. ✨</p>

            {/* Stars */}
            <div style={styles.stars}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  onClick={() => !isSubmitting && setRating(n)}
                  style={{
                    ...styles.star,
                    opacity: rating >= n ? 1 : 0.3,
                    transform: rating === n ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback (optional)"
              style={styles.textarea}
              disabled={isSubmitting}
            />

            {/* Submit */}
            <button
              onClick={submitFeedback}
              disabled={isSubmitting}
              style={{
                ...styles.button,
                transform: isSubmitting ? "scale(0.96)" : "scale(1)",
                opacity: isSubmitting ? 0.85 : 1,
              }}
            >
              {isSubmitting ? "Sending…" : "Submit Feedback"}
            </button>
          </>
        ) : (
          <div style={styles.successWrap}>
            <div style={styles.glow}></div>
            <div style={styles.check}>✓</div>
            <p style={styles.successText}>
              Feedback received <br /> Thank you
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at center, #050b18, #000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "white",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(80,180,255,0.4)",
    borderRadius: 22,
    padding: "26px 22px",
    boxShadow: "0 0 25px rgba(0,160,255,0.4)",
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#6ecbff",
    marginBottom: 6,
  },

  subtitle: {
    textAlign: "center",
    opacity: 0.85,
    marginBottom: 22,
    fontSize: 17,
  },

  stars: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    fontSize: 34,
    cursor: "pointer",
    marginBottom: 22,
  },

  star: {
    transition: "0.15s ease",
    userSelect: "none",
  },

  textarea: {
    width: "100%",
    height: 110,
    borderRadius: 14,
    padding: 14,
    background: "rgba(0,0,0,0.35)",
    color: "white",
    border: "1px solid rgba(80,180,255,0.35)",
    resize: "none",
    marginBottom: 22,
    outline: "none",
    fontSize: 14,
  },

  button: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(90deg,#3d6cff,#6f92ff)",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
  },

  successWrap: {
    textAlign: "center",
    padding: "36px 0",
  },

  glow: {
    width: 90,
    height: 90,
    margin: "0 auto",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(80,120,255,0.4), transparent)",
  },

  check: {
    fontSize: 40,
    marginTop: -60,
  },

  successText: {
    marginTop: 16,
    opacity: 0.9,
    fontSize: 15,
  },
};
