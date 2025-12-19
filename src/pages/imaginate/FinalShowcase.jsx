import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

export default function FinalShowcase() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToFeedbackPage = () => {
    navigate("/imaginate/feedback");
  };

  let fake = location.state?.fake;

  if (!fake) {
    const stored = sessionStorage.getItem("imaginate_final_data");
    if (stored) fake = JSON.parse(stored);
  }

  if (!fake) {
    return (
      <div style={{ color: "white", padding: 40 }}>
        Error: No data received.
      </div>
    );
  }

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

  const imageUrl = fake.image;

  const { error } = await supabase
    .from("imagination_space")
    .insert([
      {
       user_id: user.id,
       image_url: imageUrl, 
       prompt: fake.promptUsed || "Untitled idea",
      },
    ]);

  if (error) {
    console.error(error);
    alert("Failed to save 😢");
  } else {
    alert("Saved in Imaginate ✅");
  }
};

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Idea Is Ready! 👏</h1>

      <p style={styles.subtitle}>
        Your feedback helps Imaginate grow. Thank you for building the future with us! 😀
      </p>

      <p style={styles.engine}>
        Crafted from your imagination using <strong>Imaginate Engine v1.0</strong>
      </p>

      {/* Image */}
      <div style={styles.imageWrap}>
        <img src={fake.image} alt="Mockup" style={styles.image} />
      </div>

      {/* Meta */}
      <div style={styles.meta}>
        <div><strong>Prompt:</strong> {fake.promptUsed}</div>
        <div><strong>Category:</strong> {fake.category || "Uncategorized"}</div>
      </div>

      {/* Actions */}
      <div style={styles.actions}>
        <button 
          onClick={async () => {
            await handleSave();
            navigate("/imaginate/saved");
          }}
          style={styles.saveBtn}
        >
          💾 Save in Imaginate
        </button>

        <button onClick={handleDownload} style={styles.secondaryBtn}>
          Download Mockup
        </button>

        <button
          onClick={() => navigate("/imaginate")}
          style={styles.secondaryBtn}
        >
          Generate Another Idea
        </button>
      </div>

      {/* Feedback */}
      <button
        onClick={goToFeedbackPage}
        style={styles.feedbackBtn}
      >
        ⭐ Feedback
      </button>

      <p style={styles.footer}>Imaginate MVP — Alpha Version</p>
    </div>
  );
}

/* ---------- styles ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4218B8, #D91A6A)",
    color: "white",
    textAlign: "center",
    padding: "50px 16px",
  },

  title: {
    fontSize: "clamp(32px, 6vw, 52px)",
    fontWeight: 900,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: "clamp(18px, 4.5vw, 25px)",
    opacity: 0.9,
    marginBottom: 24,
  },

  engine: {
    fontSize: "clamp(14px, 4vw, 20px)",
    opacity: 0.9,
    marginBottom: 32,
  },

  imageWrap: {
    margin: "0 auto",
    width: "100%",
    maxWidth: 320,
    aspectRatio: "1 / 1",
    borderRadius: 28,
    background: "rgba(255,255,255,0.12)",
    padding: 14,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },

  meta: {
    marginTop: 28,
    fontSize: "clamp(14px, 4vw, 18px)",
    lineHeight: "28px",
    opacity: 0.95,
  },

  actions: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    alignItems: "center",
  },

  saveBtn: {
    width: "100%",
    maxWidth: 280,
    padding: "14px 0",
    borderRadius: 14,
    border: "none",
    background: "linear-gradient(90deg,#ffe259,#ffa751)",
    color: "#000",
    fontSize: 18,
    fontWeight: 800,
    cursor: "pointer",
  },

  secondaryBtn: {
    width: "100%",
    maxWidth: 280,
    padding: "14px 0",
    background: "rgba(255,255,255,0.25)",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.35)",
    color: "white",
    fontSize: 17,
    cursor: "pointer",
  },

  feedbackBtn: {
    position: "fixed",
    top: 20,
    right: 20,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.35)",
    color: "white",
    padding: "8px 16px",
    borderRadius: 30,
    cursor: "pointer",
    fontSize: 14,
    zIndex: 999,
  },

  footer: {
    marginTop: 60,
    opacity: 0.7,
    fontSize: 14,
  },
};
