import { useLocation, useNavigate } from "react-router-dom";

export default function FinalShowcase() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToFeedbackPage = () => {
    navigate("/imaginate/feedback");
  };

  // Try to get data from router state
  let fake = location.state?.fake;

  // Fallback: get data from sessionStorage (for refresh safety)
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

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4218B8, #D91A6A)",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1 style={{ fontSize: 52, fontWeight: 900, marginBottom: 10 }}>
        Your Idea Is Ready!👏
      </h1>

      <p style={{ opacity: 0.9, fontSize: 25, marginBottom: 40 }}>
        Your feedback helps Imaginate grow. Thank you for building the future with us!😀
      </p>

      <p style={{ opacity: 0.9, fontSize: 20, marginBottom: 40 }}>
        Crafted from your imagination using <strong>Imaginate Engine v1.0</strong>
      </p>

      <div
        style={{
          margin: "0 auto",
          width: 300,
          height: 300,
          borderRadius: 28,
          background: "rgba(255,255,255,0.12)",
          padding: 16,
        }}
      >
        <img
          src={fake.image}
          alt="Mockup"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
      </div>

      <div
        style={{
          marginTop: 40,
          fontSize: 20,
          lineHeight: "32px",
        }}
      >
        <div>
          <strong>Prompt:</strong> {fake.promptUsed}
        </div>
        <div>
          <strong>Category:</strong> {fake.category || "Uncategorized"}
        </div>
      </div>

      <div style={{ marginTop: 45 }}>
        <button
          onClick={handleDownload}
          style={{
            width: 260,
            padding: "14px 0",
            marginBottom: 18,
            background: "rgba(255,255,255,0.25)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.35)",
            color: "white",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Download Mockup
        </button>

        <button
          onClick={() => navigate("/imaginate")}
          style={{
            width: 260,
            padding: "14px 0",
            background: "rgba(255,255,255,0.25)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.35)",
            color: "white",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Generate Another Idea
        </button>

        <button
          onClick={goToFeedbackPage}
          style={{
          position: "fixed",
          top: "25px",
          right: "30px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.35)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "30px",
          cursor: "pointer",
          fontSize: "14px",
          zIndex: 999,
          transition: "0.2s",
        }}
          onMouseEnter={(e) =>
         (e.target.style.background = "rgba(255,255,255,0.25)")
        }
          onMouseLeave={(e) =>
         (e.target.style.background = "rgba(255,255,255,0.15)")
         }
        >
          ⭐ Feedback
        </button>

      </div>

      <p style={{ marginTop: 60, opacity: 0.7 }}>
        Imaginate MVP — Alpha Version
      </p>
    </div>
  );
}
