// src/pages/imaginate/Loading.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  // Get stored generation data
  const navState = JSON.parse(
    sessionStorage.getItem("imaginate_generation") || "{}"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/imaginate/3d-result");
    }, 2800); // match your previous timing

    return () => clearTimeout(timer);
  }, [navigate]);

  const displayPrompt = navState.prompt || (navState.concept && navState.concept.title) || "Your idea";

  const displayImage = navState.uploadedImage || (navState.concept && navState.concept.image) || "/fake/futuristic/universe.png";

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 6px rgba(78,203,255,0.06); }
          50% { box-shadow: 0 0 28px rgba(78,203,255,0.18); }
          100% { box-shadow: 0 0 6px rgba(78,203,255,0.06); }
        }
        @keyframes dots {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-6px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
      `}</style>

      <div style={styles.container}>
        {/* Loader */}
        <div style={styles.loaderCard}>
          <div style={styles.spinnerWrap}>
            <div style={styles.spinner} />
            <div style={styles.spinnerGlow} />
          </div>

          <h2 style={styles.h2}>Generating your concept…</h2>
          <p style={styles.p}>Imaginate AI is crafting visuals from your idea — hold tight.</p>

          <div style={styles.typingRow}>
            <span style={styles.typingText}>Processing</span>
            <span style={{ ...styles.dot, animationDelay: "0s" }} />
            <span style={{ ...styles.dot, animationDelay: "0.12s" }} />
            <span style={{ ...styles.dot, animationDelay: "0.24s" }} />
          </div>
        </div>

        {/* Preview */}
        <div style={styles.previewCard}>
          <div style={styles.previewTitle}>Preview</div>
          <div style={styles.thumbWrap}>
            <img
              src={displayImage}
              alt="preview"
              style={styles.thumb}
              onError={(e) => {
                e.currentTarget.src = "/fake/futuristic/universe.png";
              }}
            />
          </div>
          <div style={styles.promptWrap}>
            <div style={styles.promptLabel}>Prompt</div>
            <div style={styles.promptText}>{displayPrompt}</div>
          </div>
          <div style={styles.smallNote}>
            {navState.concept ? "Concept chosen: " + navState.concept.title : "Using uploaded image / prompt"}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- styles ---------- */
const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "radial-gradient(circle at center, #050b18, #000)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    boxSizing: "border-box",
    color: "#e6f7ff",
    fontFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
  },
  container: {
    width: "100%",
    maxWidth: 980,
    display: "flex",
    gap: 24,
    margin: "0 auto",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  loaderCard: {
    flex: "1 1 520px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15))",
    border: "1px solid rgba(78,203,255,0.08)",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 12px 40px rgba(3,120,140,0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  spinnerWrap: {
    position: "relative",
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  spinner: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "7px solid rgba(255,255,255,0.06)",
    borderTopColor: "rgba(78,203,255,0.95)",
    animation: "spin 1.2s linear infinite",
    boxSizing: "border-box",
  },
  spinnerGlow: {
    position: "absolute",
    inset: 6,
    borderRadius: "50%",
    animation: "pulse 2.6s ease-in-out infinite",
    pointerEvents: "none",
  },
  h2: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: "#bff6ff",
  },
  p: {
    marginTop: 6,
    fontSize: 14,
    color: "#cfeff7",
    opacity: 0.9,
  },
  typingRow: {
    marginTop: 14,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  typingText: {
    color: "#9fe8ff",
    fontWeight: 700,
  },
  dot: {
    width: 7,
    height: 7,
    display: "inline-block",
    background: "linear-gradient(180deg,#4ecbff,#00aaff)",
    borderRadius: "50%",
    animation: "dots 0.9s infinite",
  },
  previewCard: {
    flex: "1 1 320px",
    borderRadius: 14,
    padding: 16,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12))",
    border: "1px solid rgba(80,180,255,0.06)",
    boxShadow: "0 8px 30px rgba(0,120,140,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "box-shadow 0.3s ease",
  },
  previewTitle: {
    color: "#9fe8ff",
    fontWeight: 800,
    marginBottom: 10,
  },
  thumbWrap: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    boxShadow: "0 4px 16px rgba(78,203,255,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  promptWrap: {
    marginTop: 4,
    textAlign: "center",
  },
  promptLabel: {
    fontSize: 12,
    color: "#9fe8ff",
    fontWeight: 700,
    marginBottom: 4,
  },
  promptText: {
    color: "#cfeff7",
    lineHeight: 1.4,
    fontSize: 13,
  },
  smallNote: {
    marginTop: 10,
    fontSize: 12,
    color: "#bcdff0",
    opacity: 0.8,
    textAlign: "center",
  },
};