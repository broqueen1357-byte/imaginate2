// src/pages/imaginate/FinalShowcase.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useEffect, useState } from "react";

export default function FinalShowcase() {
  const location = useLocation();
  const navigate = useNavigate();

  const fake =
    location.state?.fake ||
    JSON.parse(sessionStorage.getItem("imaginate_selected_concept"));

  if (!fake) {
    navigate("/imaginate");
    return null;
  }

  // ---------------- STATES ----------------
  const [countdown, setCountdown] = useState(null); // null = inactive
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ---------------- INIT FEEDBACK FLOW ----------------
  useEffect(() => {
    const alreadyGiven =
      localStorage.getItem("imaginate_feedback_given") === "true";

    if (alreadyGiven) {
      setCountdown(null);
      return;
    }

    // start countdown ONLY once
    setCountdown(3);
  }, []);

  // ---------------- COUNTDOWN ----------------
  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setShowFeedback(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  // ---------------- ACTIONS ----------------
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = fake.image;
    a.download = "imaginate-mockup.png";
    a.click();
  };

  const handleSave = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please log in first");
      return;
    }

    const { error } = await supabase.from("imagination_space").insert([
      {
        user_id: user.id,
        image_url: fake.image,
        prompt: fake.promptUsed || "Untitled idea",
      },
    ]);

    if (error) {
      alert("Failed to save 😢");
    } else {
      alert("🎉 Congratulations! Your idea is saved 😉");
    }
  };

const submitFeedback = async () => {
  setIsSubmitting(true);

  let userId = null;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) userId = user.id;

  const { error } = await supabase.from("feedback").insert({
    user_id: userId,
    message: feedback || "No written feedback",
    rating: rating === 0 ? null : rating,
    source: "finalshowcase",
  });

  if (error) console.error("Supabase insert error:", error);

  localStorage.setItem("imaginate_feedback_given", "true");
  setShowSuccess(true);
  setTimeout(() => setShowFeedback(false), 1500);
};
  // ---------------- UI ----------------
  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            Congratulations 🎉
            <br />
            <span style={styles.titleSub}>Your idea is now real</span>
          </h1>
          <p style={styles.engine}>
            Crafted using <strong>Imaginate Engine v1.0</strong>
          </p>
        </div>

        {/* MAIN */}
        <div style={styles.main}>
          <div style={styles.imageZone}>
            <div style={styles.imageFrame}>
              <img src={fake.image} alt="concept" style={styles.image} />
            </div>
            <p style={styles.imageHint}>
              This is your generated concept. Save it to keep it forever.
            </p>
          </div>

          <div style={styles.infoZone}>
            <div style={styles.meta}>
              <strong>Prompt</strong>
              <div style={styles.metaValue}>{fake.promptUsed}</div>

              <div style={{ marginTop: 14 }}>
                <strong>Category</strong>
              </div>
              <div style={styles.metaValue}>
                {fake.category || "Uncategorized"}
              </div>
            </div>

            <div style={styles.actions}>
              <button
                onClick={async () => {
                  await handleSave();
                  navigate("/imaginate/saved");
                }}
                style={styles.saveBtn}
              >
                😎 Save to Imaginate
              </button>

              <button onClick={handleDownload} style={styles.secondaryBtn}>
                Download Image
              </button>

              <button
                onClick={() => navigate("/imaginate")}
                style={styles.ghostBtn}
              >
                Generate Another Idea
              </button>
            </div>

            {/* FIRST SAVE REWARD */}
            <div style={styles.reward}>
              🏆 <strong>Founder Save</strong>
              <span style={styles.rewardSub}>
                You’re among the first creators on Imaginate
              </span>
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        {countdown !== null && countdown > 0 && (
          <div style={styles.countdown}>{countdown}</div>
        )}

        {/* FEEDBACK POPUP */}
        {showFeedback && (
          <div style={styles.feedbackOverlay}>
            <div style={styles.feedbackBox}>
              {!showSuccess ? (
                <>
                  <h2>You brought this idea to life! 💖</h2>
                  <h2>Share your thoughts what excited you most about it😃? Your feedback shapes the future of imaginate 💡</h2>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    style={styles.feedbackTextarea}
                  />
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    style={styles.feedbackSelect}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={submitFeedback}
                    style={styles.feedbackSubmitBtn}
                  >
                    Submit Feedback
                  </button>
                </>
              ) : (
                <h3 style={{ color: "#9fe8ff" }}>
                  Thanks for your feedback! 💙
                </h3>
              )}
            </div>
          </div>
        )}

        <p style={styles.footer}>Imaginate MVP — Alpha</p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  page: {
    minHeight: "100vh",
    background: `url("/END.png") center/cover no-repeat`,
    color: "white",
    padding: "40px 20px",
    position: "relative",
    overflowX: "hidden",
  },
  overlay: {
    position: "relative",
    zIndex: 1,
    background: "rgba(0, 0, 30, 0.55)",
    minHeight: "100vh",
    padding: "40px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: "clamp(34px, 6vw, 56px)",
    fontWeight: 900,
    lineHeight: 1.1,
    textShadow: "0 0 10px #00f6ff, 0 0 20px #ff00e0",
  },
  titleSub: {
    fontSize: "clamp(18px, 3vw, 24px)",
    opacity: 0.85,
    fontWeight: 500,
    textShadow: "0 0 6px #00f6ff, 0 0 12px #ff00e0",
  },
  engine: {
    marginTop: 12,
    opacity: 0.7,
    textShadow: "0 0 4px #00f6ff",
  },
  main: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageZone: {
    flex: "0 0 360px",
    textAlign: "center",
  },
  imageFrame: {
    borderRadius: 26,
    padding: 14,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))",
    boxShadow:
      "0 0 20px #00f6ff, 0 0 40px #ff00e0, 0 20px 60px rgba(0,0,0,0.6)",
    transition: "0.3s all",
  },
  image: {
    width: "100%",
    borderRadius: 18,
    objectFit: "cover",
    boxShadow: "0 0 12px #00f6ff, 0 0 24px #ff00e0",
  },
  imageHint: {
    marginTop: 14,
    opacity: 0.8,
    fontSize: 20,
    textShadow: "0 0 4px #00f6ff",
  },
  infoZone: {
    flex: 1,
    minWidth: 280,
  },
  meta: {
    opacity: 0.95,
    marginBottom: 30,
    textShadow: "0 0 4px #00f6ff",
  },
  metaValue: {
    opacity: 0.85,
    fontSize: 20,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  saveBtn: {
    padding: "14px",
    borderRadius: 14,
    border: "none",
    fontWeight: 800,
    fontSize: 17,
    background: "linear-gradient(90deg,#ffe259,#ffa751)",
    color: "#000",
    cursor: "pointer",
    boxShadow: "0 0 8px #ffe259, 0 0 16px #ffa751",
    transition: "0.3s all",
  },
  secondaryBtn: {
    padding: "14px",
    borderRadius: 14,
    fontSize: 17,
    background: "rgba(255,255,255,0.18)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 0 6px #00f6ff, 0 0 12px #ff00e0",
  },
  ghostBtn: {
    padding: "12px",
    background: "transparent",
    color: "rgba(255,255,255,0.7)",
    border: "none",
    cursor: "pointer",
    textShadow: "0 0 6px #00f6ff",
  },
  reward: {
    marginTop: 28,
    padding: "14px",
    borderRadius: 16,
    background: "rgba(255,215,0,0.08)",
    border: "1px solid rgba(255,215,0,0.3)",
    fontSize: 17,
    boxShadow: "0 0 8px #ffe259, 0 0 16px #ffa751",
  },
  rewardSub: {
    display: "block",
    opacity: 0.7,
    marginTop: 4,
  },
  feedbackBtn: {
    position: "fixed",
    top: 18,
    right: 18,
    padding: "8px 16px",
    borderRadius: 30,
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    cursor: "pointer",
    textShadow: "0 0 6px #00f6ff",
  },
  countdown: {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 36,
    fontWeight: 700,
    background: "rgba(0,0,0,0.6)",
    padding: "12px 24px",
    borderRadius: 16,
    zIndex: 1000,
    color: "#00f6ff",
    textShadow: "0 0 12px #00f6ff",
  },
  feedbackOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1100,
    animation: "fadeIn 0.5s ease forwards",
  },
  feedbackBox: {
    background: "#050b18",
    padding: 24,
    borderRadius: 16,
    fontSize: 15,
    maxWidth: 400,
    width: "90%",
    textAlign: "center",
    transform: "translateY(40px)",
    animation: "slideUp 0.5s ease forwards",
  },
  feedbackTextarea: {
    width: "100%",
    height: 80,
    marginTop: 12,
    borderRadius: 8,
    padding: 8,
    fontSize: 15,
    background: "#001018",
    color: "#9fe8ff",
    border: "1px solid rgba(78,203,255,0.25)",
    resize: "none",
  },
  feedbackSelect: {
    padding: 6,
    borderRadius: 6,
    border: "1px solid rgba(78,203,255,0.25)",
    background: "#001018",
    color: "#9fe8ff",
  },
  feedbackSubmitBtn: {
    marginTop: 16,
    padding: "12px 24px",
    borderRadius: 12,
    fontSize: 15,
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg,#4ecbff,#00aaff)",
    fontWeight: 700,
    color: "#001018",
  },
  footer: {
    marginTop: 70,
    textAlign: "center",
    opacity: 0.6,
    fontSize: 16,
    textShadow: "0 0 4px #00f6ff",
  },
};
