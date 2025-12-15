// src/pages/FinalSummary.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { generateFakeOutput } from "../utils/fakeOutputs";

export default function FinalSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  // Accept fake object from navigation state (ThreeDResult may pass it).
  // If not present, generate one using prompt or fallback.
  const passedFake = location.state?.fake || location.state?.fakeData || null;
  const promptFromState =
    location.state?.prompt || location.state?.uploadedImagePrompt || sessionStorage.getItem("imaginate_prompt") || "Your creative idea";

  const [fake, setFake] = useState(() => passedFake || generateFakeOutput(promptFromState));
  const [imgSrc, setImgSrc] = useState(fake.image);
  const [imgLoading, setImgLoading] = useState(true);
  const fallback = "/fake/futuristic/universe.png";

  useEffect(() => {
    // If uploaded image was passed explicitly (user-supplied), prefer that
    if (location.state?.uploadedImage) {
      setImgSrc(location.state.uploadedImage);
      setFake((s) => ({ ...s, image: location.state.uploadedImage, promptUsed: promptFromState }));
      setImgLoading(false);
      return;
    }

    // If we received fake via state and it has image, try preloading
    setImgLoading(true);
    const img = new Image();
    img.onload = () => {
      setImgSrc(fake.image);
      setImgLoading(false);
    };
    img.onerror = () => {
      setImgSrc(fallback);
      setImgLoading(false);
    };
    img.src = fake.image;
  }, [fake, location.state, promptFromState]);

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

  const handleModify = () => {
    // Send the preview back to the Imaginate page so user can tweak
    navigate("/imaginate", {
      state: { uploadedImage: imgSrc, prompt: fake.promptUsed || promptFromState },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #020816, #000814)",
        padding: 28,
        color: "#e6f7ff",
        boxSizing: "border-box",
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 28, alignItems: "flex-start" }}>
        {/* LEFT – IMAGE PREVIEW */}
        <div style={{ flex: "0 0 45%" }}>
          <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(80,180,255,0.12)", boxShadow: "0 12px 40px rgba(3,120,160,0.08)", background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.05))", padding: 12 }}>
            <div style={{ width: "100%", height: 420, borderRadius: 12, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#081017" }}>
              {imgLoading ? (
                <div style={{ color: "#bfefff" }}>Loading preview…</div>
              ) : (
                <img src={imgSrc} alt="Generated preview" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={() => setImgSrc(fallback)} />
              )}

              <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(0,0,0,0.45)", padding: "6px 10px", borderRadius: 999, color: "#bfefff", fontWeight: 700, fontSize: 13 }}>
                Generated Preview
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <button onClick={handleDownload} style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid rgba(3,150,200,0.12)", background: "#ffffff", color: "#014b56", fontWeight: 700, cursor: "pointer" }}>
              Download PNG
            </button>

            <button onClick={() => navigate("/imaginate")} style={{ padding: "10px 14px", borderRadius: 10, border: "none", background: "linear-gradient(90deg,#00b4ff,#0048ff)", color: "white", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 28px rgba(3,150,255,0.18)" }}>
              Start New Idea
            </button>

            <button onClick={handleNext} style={{ padding: "10px 14px", borderRadius: 10, border: "none", background: "linear-gradient(90deg,#00b4ff,#0048ff)", color: "white", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 28px rgba(3,150,255,0.18)" }}>
              Next Step →
            </button>

            <button onClick={handleModify} style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)", color: "#dbefff", fontWeight: 700, cursor: "pointer" }}>
              Modify
            </button>
          </div>
        </div>

        {/* RIGHT – TEXT SUMMARY */}
        <div style={{ flex: "1 1 55%", background: "white", borderRadius: 14, padding: 22, boxShadow: "0 12px 40px rgba(3,120,160,0.06)", color: "#023" }}>
          <h1 style={{ margin: 0, fontSize: 28, color: "#023" }}>{fake.title}</h1>
          <p style={{ color: "#586a73", marginTop: 10, marginBottom: 18, fontSize: 16 }}>{fake.description || "A refined futuristic product concept combining intelligent automation, advanced engineering and user-centric design."}</p>

          <section style={{ marginTop: 12 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#014b56" }}>Prompt Used</h3>
            <p style={{ marginTop: 6, color: "#2a4c59" }}>{fake.promptUsed}</p>
          </section>

          <section style={{ marginTop: 12 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#014b56" }}>Key Features</h3>
            <ul style={{ margin: 0, marginTop: 8, paddingLeft: 18 }}>
              {fake.features.map((f, i) => (
                <li key={i} style={{ marginTop: 8, color: "#235" }}>• {f}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginTop: 18 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#014b56" }}>AI Insight</h3>
            <p style={{ marginTop: 6, color: "#2a4c59" }}>
              Imaginate combined design heuristics with futuristic engineering principles to produce this refined product concept.
            </p>
          </section>

          <div style={{ marginTop: 22 }}>
            <Link to="/imaginate" style={{ color: "#0077cc", textDecoration: "none", fontWeight: 700 }}>← Back to Imaginate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
