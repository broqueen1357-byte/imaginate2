import { useLocation, useNavigate } from "react-router-dom";
import { generateFakeOutput } from "../../utils/fakeOutputs";

export default function ThreeDResult() {
  const navigate = useNavigate();
  const location = useLocation();

  // User entered prompt (optional)
  const userPrompt =
    location.state?.prompt ||
    sessionStorage.getItem("imaginate_prompt") ||
    "Your creative idea";

  // Generate fake AI output
  const fake = generateFakeOutput(userPrompt);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #020816, #000814)",
        padding: "30px",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          gap: "30px",
        }}
      >
        {/* LEFT - IMAGE PREVIEW */}
        <div style={{ flex: "0 0 45%" }}>
          <div
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "12px",
              boxShadow: "0 0 25px rgba(0,180,255,0.25)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "430px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundImage: `url("${fake.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* BUTTONS */}
          <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
            {/* Download */}
            <button
              onClick={() => {
                const a = document.createElement("a");
                a.href = fake.image;
                a.download = "imaginate-result.png";
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}
              style={buttonWhite}
            >
              Download PNG
            </button>

            {/* Next Step → FinalSummary */}
            <button
              onClick={() =>
                navigate("/imaginate/next-step", {
                  state: {
                    fake, // pass entire fake AI object
                  },
                })
              }
              style={buttonBlue}
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div
          style={{
            flex: 1,
            background: "white",
            color: "#021d2b",
            padding: "22px",
            borderRadius: "14px",
            boxShadow: "0 0 25px rgba(0,180,255,0.15)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 800 }}>
            {fake.title}
          </h1>

          <p style={{ marginTop: 8, color: "#4d6570" }}>{fake.description}</p>

          <section style={{ marginTop: 20 }}>
            <h3 style={sectionTitle}>Prompt Used</h3>
            <p style={sectionText}>{fake.promptUsed}</p>
          </section>

          <section style={{ marginTop: 20 }}>
            <h3 style={sectionTitle}>Key Features</h3>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              {fake.features.map((f, i) => (
                <li key={i} style={{ marginBottom: "6px", color: "#173949" }}>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

const buttonBlue = {
  padding: "10px 16px",
  background: "linear-gradient(90deg,#00b4ff,#006dff)",
  color: "white",
  borderRadius: "10px",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const buttonWhite = {
  padding: "10px 16px",
  background: "white",
  color: "#003c57",
  border: "1px solid rgba(0,150,255,0.2)",
  borderRadius: "10px",
  fontWeight: 700,
  cursor: "pointer",
};

const sectionTitle = {
  margin: 0,
  fontSize: "15px",
  fontWeight: 800,
  color: "#014b56",
};

const sectionText = {
  marginTop: "6px",
  color: "#2a4c59",
};
