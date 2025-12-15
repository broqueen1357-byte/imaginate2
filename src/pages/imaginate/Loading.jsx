// src/pages/imaginate/Loading.jsx

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  const navState = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/imaginate/3d-result", { state: { ...navState } });
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigate, navState]);

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
          <p style={styles.p}>
            Imaginate AI is crafting visuals from your idea — hold tight.
          </p>

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
            {navState.uploadedImage ? (
              <img
                src={navState.uploadedImage}
                alt="uploaded preview"
                style={styles.thumb}
                onError={(e) => {
                  e.currentTarget.src = "/fake/futuristic/universe.png";
                }}
              />
            ) : (
              <div style={styles.thumbPlaceholder}>No image</div>
            )}
          </div>

          <div style={styles.promptWrap}>
            <div style={styles.promptLabel}>Prompt</div>
            <div style={styles.promptText}>
              {navState.prompt
                ? navState.prompt
                : navState.uploadedImage
                ? "Using uploaded image"
                : "No prompt provided"}
            </div>
          </div>

          <div style={styles.smallNote}>
            This is a mock generation — visual preview will appear next.
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
    flexWrap: "wrap",            // 🔑 mobile stack
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
    width: 96,      // smaller for mobile
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
  },

  previewTitle: {
    color: "#9fe8ff",
    fontWeight: 800,
    marginBottom: 10,
  },

  thumbWrap: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#081017",
    marginBottom: 10,
  },

  thumb: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  thumbPlaceholder: {
    color: "#94cbe8",
    opacity: 0.6,
    fontWeight: 700,
  },

  promptWrap: {
    marginTop: 4,
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
  },
};
