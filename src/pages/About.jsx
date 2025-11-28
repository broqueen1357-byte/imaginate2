import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        padding: "40px 20px",
        color: "white",
        overflowY: "auto",
      }}
    >
      {/* OUTER CARD */}
      <div
        style={{
          width: "95%",
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "50px",
          borderRadius: "25px",
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(80,180,255,0.40)",
          boxShadow: "0 0 25px rgba(0,160,255,0.45)",
          backdropFilter: "blur(4px)",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#a96bff",
            textShadow: "0 0 25px #a96bff",
          }}
        >
          About Imaginate
        </h1>

        {/* INTRO TEXT */}
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#e6ccff",
            marginBottom: "40px",
            maxWidth: "850px",
            marginInline: "auto",
          }}
        >
          Imaginate is a creative intelligence tool that transforms raw ideas
          into clear visual concepts instantly. Instead of needing perfect prompts
          or design skills, you simply describe your idea — and Imaginate turns it
          into structured, visual thinking.
        </p>

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "25px",
            fontWeight: "700",
            color: "white",
          }}
        >
          Imaginate is different from other AI tools because it focuses on ideas,
          not just images:
        </h2>

        {/* LIST SECTION */}
        <div style={{ textAlign: "left", maxWidth: "850px", margin: "0 auto" }}>
          {/* ITEM 1 */}
          <p style={itemStyle}>
            <strong>1. Idea-First, Not Image-First:</strong> Most tools want a
            perfect prompt. Imaginate understands messy thoughts and shapes them
            into something clear and usable.
          </p>
          <hr style={divider} />

          {/* ITEM 2 */}
          <p style={itemStyle}>
            <strong>2. Visual Thinking, Not Just Output:</strong> It doesn’t just
            give you a picture — it gives you clarity, interpretation, and
            concept direction.
          </p>
          <hr style={divider} />

          {/* ITEM 3 */}
          <p style={itemStyle}>
            <strong>3. Built for Innovators, Not Designers:</strong> Students,
            creators, entrepreneurs — anyone can bring imagination into a real
            starting point.
          </p>
          <hr style={divider} />

          {/* ITEM 4 */}
          <p style={itemStyle}>
            <strong>4. Zero Skills Needed:</strong> No design experience.  
            No prompt engineering.  
            Just your idea — Imaginate does the rest.
          </p>
          <hr style={divider} />

          {/* ITEM 5 */}
          <p style={itemStyle}>
            <strong>5. Built for Fast Validation:</strong> You can test, refine,
            and evolve ideas faster than traditional brainstorming. Perfect for
            early creators figuring out what works.
          </p>
        </div>

        {/* BIG STATEMENT */}
        <h2
          style={{
            fontSize: "33px",
            fontWeight: "700",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          Imaginate isn’t an image generator —  
          it’s a thinking tool that visualizes your imagination
        </h2>

        {/* ICONS SECTION */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "40px",
            marginTop: "30px",
          }}
        >
          {[
            { label: "IMAGINE", sub: "THE SPARK ZONE" },
            { label: "BUILD", sub: "THE CREATOR ZONE" },
            { label: "TEST", sub: "THE SIMULATION ZONE" },
            { label: "VISUALIZE", sub: "THE AI STUDIO" },
          ].map((item, index) => (
            <div key={index}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px solid #00d5ff",
                  boxShadow: "0 0 15px #00d5ff",
                  margin: "0 auto 10px",
                }}
              ></div>
              <h3 style={{ margin: 0 }}>{item.label}</h3>
              <p style={{ margin: 0, color: "#9deaff" }}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div style={{ marginTop: "70px" }}>
          <Link to="/">
            <button
              style={{
                padding: "14px 40px",
                fontSize: "18px",
                fontWeight: "700",
                borderRadius: "15px",
                background: "linear-gradient(90deg, #009dff, #00d5ff)",
                color: "black",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(0,160,255,0.6)",
              }}
            >
              ← Back to Landing
            </button>
          </Link>
        </div>

        {/* PAGE NUMBER */}
        <p style={{ marginTop: "40px", opacity: 0.6 }}>Page 1</p>
      </div>
    </div>
  );
}

// 🔹 Reusable Styles
const itemStyle = {
  color: "#df9eff",
  fontSize: "17px",
  lineHeight: "1.6",
  marginBottom: "15px",
};

const divider = {
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
  margin: "18px 0",
};
