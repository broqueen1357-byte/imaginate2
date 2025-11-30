// src/pages/FinalSummary.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { generateFakeOutput } from "../utils/fakeOutputs"; // correct relative path

export default function FinalSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  // prompt passed from previous page (or default)
  const userPrompt = location.state?.prompt || location.state?.uploadedImage || "Your creative idea";

  // Generate fake AI output (image + features)
  const [fake, setFake] = useState(() => generateFakeOutput(userPrompt));
  const [imgSrc, setImgSrc] = useState(fake.image);
  const [imgLoading, setImgLoading] = useState(true);
  const fallback = "/fake/futuristic/universe.png"; // fallback image in public

  useEffect(() => {
    // If the location passed an image (uploaded), prefer that
    if (location.state?.uploadedImage) {
      setImgSrc(location.state.uploadedImage);
      setFake((s) => ({ ...s, image: location.state.uploadedImage, promptUsed: userPrompt }));
      setImgLoading(false);
      return;
    }

    // Preload the chosen fake image to detect load/error
    setImgLoading(true);
    const img = new Image();
    img.onload = () => {
      setImgSrc(fake.image);
      setImgLoading(false);
    };
    img.onerror = () => {
      // fallback to universe if fake image fails to load
      setImgSrc(fallback);
      setImgLoading(false);
    };
    img.src = fake.image;
  }, [fake, location.state, userPrompt]);

  // download helper (works for relative public URLs)
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imgSrc || fallback;
    link.download = "imaginate-result.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleNext = () => {
    navigate("/imaginate/next-step", { state: { previewImage: imgSrc, fakeData: fake } });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* LEFT – IMAGE PREVIEW */}
        <div style={styles.left}>
          <div style={styles.preview}>
            <div style={styles.previewInner}>
              {/* Use <img> so network errors show up in DevTools */}
              {imgLoading ? (
                <div style={styles.loadingText}>Loading preview…</div>
              ) : (
                <img
                  src={imgSrc}
                  alt="Generated preview"
                  style={styles.previewImage}
                  onError={() => setImgSrc(fallback)}
                />
              )}

              <div style={styles.previewLabel}>Generated Preview</div>
            </div>
          </div>

          {/* BUTTONS */}
          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <button onClick={handleDownload} style={styles.downloadBtn}>
              Download PNG
            </button>

            <button onClick={() => navigate("/imaginate")} style={styles.startNewBtn}>
              Start New Idea
            </button>

            <button onClick={handleNext} style={styles.startNewBtn}>
              Next Step →
            </button>
          </div>
        </div>

        {/* RIGHT – TEXT SUMMARY */}
        <div style={styles.right}>
          <h1 style={styles.h1}>{fake.title}</h1>
          <p style={styles.lead}>{fake.description || "A refined futuristic product concept combining intelligent automation, advanced engineering and user-centric design."}</p>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Prompt Used</h3>
            <p style={styles.sectionText}>{fake.promptUsed}</p>
          </section>

          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Key Features</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {fake.features.map((f, i) => (
                <li key={i} style={styles.listItem}>• {f}</li>
              ))}
            </ul>
          </section>

          <section style={{ ...styles.section, marginTop: 18 }}>
            <h3 style={styles.sectionTitle}>AI Insight</h3>
            <p style={styles.sectionText}>
              Imaginate combined design heuristics with futuristic engineering principles to produce this refined product concept.
            </p>
          </section>

          <div style={{ marginTop: 22 }}>
            <Link to="/imaginate" style={styles.backLink}>← Back to Imaginate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- inline styles ---------- */
const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "radial-gradient(circle at center, #020816, #000814)",
    padding: 28,
    color: "#e6f7ff",
    boxSizing: "border-box",
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    gap: 28,
    alignItems: "flex-start",
  },

  left: {
    flex: "0 0 45%",
  },

  preview: {
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid rgba(80,180,255,0.12)",
    boxShadow: "0 12px 40px rgba(3,120,160,0.08)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.05))",
    padding: 12,
  },

  previewInner: {
    width: "100%",
    height: 420,
    borderRadius: 12,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#081017",
  },

  previewImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  loadingText: {
    color: "#bfefff",
  },

  previewLabel: {
    position: "absolute",
    bottom: 12,
    left: 12,
    background: "rgba(0,0,0,0.45)",
    padding: "6px 10px",
    borderRadius: 999,
    color: "#bfefff",
    fontWeight: 700,
    fontSize: 13,
  },

  downloadBtn: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid rgba(3,150,200,0.12)",
    background: "#ffffff",
    color: "#014b56",
    fontWeight: 700,
    cursor: "pointer",
  },

  startNewBtn: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(90deg,#00b4ff,#0048ff)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 8px 28px rgba(3,150,255,0.18)",
  },

  right: {
    flex: "1 1 55%",
    background: "white",
    borderRadius: 14,
    padding: 22,
    boxShadow: "0 12px 40px rgba(3,120,160,0.06)",
    color: "#023",
  },

  h1: {
    margin: 0,
    fontSize: 28,
    color: "#023",
  },

  lead: {
    color: "#586a73",
    marginTop: 10,
    marginBottom: 18,
    fontSize: 16,
  },

  section: {
    marginTop: 12,
  },

  sectionTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 800,
    color: "#014b56",
  },

  sectionText: {
    marginTop: 6,
    color: "#2a4c59",
  },

  listItem: {
    marginTop: 8,
    color: "#235",
  },

  backLink: {
    color: "#0077cc",
    textDecoration: "none",
    fontWeight: 700,
  },
};
