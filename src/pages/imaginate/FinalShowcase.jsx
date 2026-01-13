import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { interpretationModes } from "../../data/interpretationModes";

export default function FinalShowcase() {
  const navigate = useNavigate();

  const [generation, setGeneration] = useState(null);
  const [conceptData, setConceptData] = useState(null);

  // 🔹 Clarity modal state
  const [showClarity, setShowClarity] = useState(false);
  const [clarityText, setClarityText] = useState("");
  const [claritySent, setClaritySent] = useState(false);

  useEffect(() => {
    const gen = sessionStorage.getItem("imaginate_generation");
    const selected = sessionStorage.getItem("imaginate_selected_concept");

    if (!gen || !selected) {
      navigate("/imaginate");
      return;
    }

    setGeneration(JSON.parse(gen));
    setConceptData(JSON.parse(selected));
  }, [navigate]);

  if (!generation || !conceptData) return null;

  const mode = interpretationModes[generation.interpretationMode];
  const userPrompt = generation.prompt || "Your idea";

  const handleSendClarity = () => {
    if (!clarityText.trim()) return;

    // 🔒 For now we just acknowledge.
    // Later this can go to Supabase / email / Notion.
    setClaritySent(true);
  };

  return (
    <div style={styles.page}>
      {/* BACKGROUND */}
      <div style={styles.bgGlow} />

      <div style={styles.container}>
        {/* HEADER */}
        <h1 style={styles.title}>This is your interpretation</h1>
        <p style={styles.subtitle}>
          Imaginate didn’t design a final product — it interpreted your idea
          using the <strong>{mode.title}</strong> lens.
        </p>

        {/* INTERPRETATION CARD */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Your idea</h3>
          <p style={styles.cardText}>{userPrompt}</p>
        </div>

        {/* MODE EXPLANATION */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>How Imaginate thought</h3>
          <p style={styles.cardText}>{mode.description}</p>
        </div>

        {/* WHAT THIS MEANS */}
        <div style={styles.cardAlt}>
          <h3 style={styles.cardTitleAlt}>What this means</h3>
          <p style={styles.cardTextAlt}>
            The visuals and concepts you saw are{" "}
            <strong>one possible way</strong> to understand your idea — not the
            only answer, and not a finished solution.
          </p>
        </div>

        {/* ACTIONS */}
        <div style={styles.actions}>
          <button style={btn.secondary} onClick={() => navigate("/imaginate")}>
            Try another idea
          </button>

          <button
            style={btn.primary}
            onClick={() => navigate("/imaginate")}
          >
            Modify this idea →
          </button>
        </div>

        {/* CLARITY ENTRY POINT */}
        <div style={styles.clarityWrap}>
          <button
            onClick={() => setShowClarity(true)}
            style={styles.clarityBtn}
          >
            Something unclear?
          </button>
        </div>
      </div>

      {/* CLARITY MODAL */}
      {showClarity && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            {!claritySent ? (
              <>
                <h3 style={styles.modalTitle}>Tell us what didn’t make sense</h3>
                <p style={styles.modalText}>
                  If something felt confusing, explain it here.  
                  We’ll use this to make Imaginate clearer.
                </p>

                <textarea
                  value={clarityText}
                  onChange={(e) => setClarityText(e.target.value)}
                  placeholder="What part felt unclear?"
                  style={styles.textarea}
                />

                <div style={styles.modalActions}>
                  <button
                    style={btn.secondary}
                    onClick={() => setShowClarity(false)}
                  >
                    Cancel
                  </button>
                  <button
                    style={btn.primary}
                    onClick={handleSendClarity}
                  >
                    Send for clarity
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 style={styles.modalTitle}>Got it 👍</h3>
                <p style={styles.modalText}>
                  Thanks for sharing. We’ll use this to improve clarity —
                  not to judge your idea.
                </p>

                <button
                  style={{ ...btn.primary, marginTop: 12 }}
                  onClick={() => {
                    setShowClarity(false);
                    setClarityText("");
                    setClaritySent(false);
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#070b1a",
    color: "white",
    position: "relative",
    overflow: "hidden",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  },
  bgGlow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, #7fffd433, transparent 70%)",
    top: "-200px",
    right: "-200px",
    filter: "blur(120px)",
  },
  container: {
    maxWidth: "760px",
    width: "100%",
    zIndex: 2,
  },
  title: {
    fontSize: "42px",
    fontWeight: 900,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.85,
    marginBottom: 32,
    lineHeight: 1.6,
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: 14,
    padding: 20,
    marginBottom: 18,
    border: "1px solid rgba(120,180,255,0.2)",
  },
  cardAlt: {
    background: "rgba(127,255,212,0.08)",
    borderRadius: 14,
    padding: 20,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 8,
    color: "#9fe8ff",
  },
  cardTitleAlt: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 8,
    color: "#7fffd4",
  },
  cardText: {
    fontSize: 15,
    opacity: 0.85,
    lineHeight: 1.6,
  },
  cardTextAlt: {
    fontSize: 15,
    lineHeight: 1.6,
  },
  actions: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  /* 🔹 Clarity */
  clarityWrap: {
    marginTop: 24,
  },
  clarityBtn: {
    background: "none",
    border: "none",
    color: "#9fe8ff",
    cursor: "pointer",
    fontSize: 14,
    opacity: 0.85,
  },

  /* 🔹 Modal */
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  modal: {
    background: "#0b1022",
    borderRadius: 16,
    padding: 24,
    maxWidth: 420,
    width: "90%",
    border: "1px solid rgba(120,180,255,0.25)",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 8,
  },
  modalText: {
    fontSize: 14,
    opacity: 0.85,
    marginBottom: 14,
    lineHeight: 1.5,
  },
  textarea: {
    width: "100%",
    minHeight: 90,
    borderRadius: 10,
    padding: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(120,180,255,0.3)",
    color: "white",
    outline: "none",
    resize: "none",
  },
  modalActions: {
    display: "flex",
    gap: 10,
    marginTop: 16,
  },
};

const btn = {
  primary: {
    padding: "14px 22px",
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 15,
    background: "#7fffd4",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },
  secondary: {
    padding: "14px 22px",
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 15,
    background: "transparent",
    color: "#7fffd4",
    border: "1px solid #7fffd4",
    cursor: "pointer",
  },
};