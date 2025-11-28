import { useNavigate, Link } from "react-router-dom";

export default function ThreeDResult() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #020816, #000814)",
        padding: "28px",
        color: "#e6f7ff",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <h1
          style={{
            fontSize: 28,
            letterSpacing: 2,
            color: "#9fe8ff",
            textShadow: "0 0 18px rgba(80,220,255,0.18)",
            margin: 0,
          }}
        >
          IMAGINATE
        </h1>

        <div style={{ display: "flex", gap: 12 }}>
          <button style={topBtn}>SAVE</button>
          <button style={topBtn}>MODIFY</button>
          <button style={topBtn}>RE-GENERATE</button>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "26px auto 80px",
          display: "flex",
          gap: 28,
          alignItems: "flex-start",
        }}
      >
        {/* Left: Square 3D preview (1:1) */}
        <div
          style={{
            flex: "0 0 60%",
            // use aspect-ratio to keep square viewport
            aspectRatio: "1 / 1",
            borderRadius: 14,
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(80,200,255,0.12)",
            boxShadow:
              "0 0 60px rgba(32,200,220,0.06), inset 0 0 40px rgba(0,200,240,0.06)",
            background: "#081017",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Neon frame effect */}
          <div
            style={{
              position: "absolute",
              inset: 8,
              borderRadius: 10,
              boxShadow:
                "0 0 40px rgba(3,150,200,0.5), inset 0 0 35px rgba(3,150,200,0.12)",
              pointerEvents: "none",
            }}
          />

          {/* Preview content (image used as background) */}
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('/universe.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.75)",
            }}
          />

          {/* A subtle label centered */}
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.4)",
              padding: "6px 12px",
              borderRadius: 999,
              color: "#bfefff",
              fontWeight: 600,
              fontSize: 13,
              boxShadow: "0 6px 18px rgba(0,120,160,0.18)",
            }}
          >
            3D Preview Area
          </div>
        </div>

        {/* Right: Control column */}
        <div style={{ flex: "0 0 38%", display: "flex", flexDirection: "column", gap: 18 }}>
          {/* 3D Controls box */}
          <div style={controlBox}>
            <h3 style={controlTitle}>3D CONTROLS</h3>

            <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", gap: 8 }}>
              <div style={smallControl}>
                <div style={iconDot}>⟲</div>
                <div style={{ fontSize: 13, marginTop: 8 }}>ROTATE</div>
              </div>

              <div style={smallControl}>
                <div style={iconDot}>🔍</div>
                <div style={{ fontSize: 13, marginTop: 8 }}>ZOOM</div>
              </div>

              <div style={smallControl}>
                <div style={iconDot}>☼</div>
                <div style={{ fontSize: 13, marginTop: 8 }}>LIGHTING</div>
              </div>
            </div>
          </div>

          {/* Guide the 3D */}
          <div style={controlBox}>
            <h3 style={controlTitle}>GUIDE THE 3D</h3>
            <p style={{ marginTop: 12, color: "#cfeff7" }}>
              Apply fabric texture on top
            </p>
          </div>

          {/* Next / arrow box */}
          <div
            onClick={() => navigate("/imaginate/next-step")}
            style={{
              ...controlBox,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              cursor: "pointer",
              userSelect: "none",
            }}
            title="Next"
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 10,
                border: "1px solid rgba(150,230,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12))",
                boxShadow: "0 6px 18px rgba(0,120,140,0.12)",
                color: "#7fe6ff",
                fontSize: 20,
              }}
            >
              ➜
            </div>
          </div>
        </div>
      </div>

      {/* Footer small note + link back to imaginate */}
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "flex-start" }}>
        <Link to="/imaginate" style={{ color: "#9fe8ff", textDecoration: "none", marginLeft: 8 }}>
          ← Back to Imaginate
        </Link>
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const topBtn = {
  padding: "10px 14px",
  borderRadius: 10,
  background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15))",
  border: "1px solid rgba(255,255,255,0.06)",
  color: "#dff9ff",
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
  fontWeight: 700,
};

const controlBox = {
  borderRadius: 12,
  padding: 18,
  background: "linear-gradient(180deg, rgba(0,0,0,0.28), rgba(255,255,255,0.01))",
  border: "1px solid rgba(80,180,220,0.08)",
  boxShadow: "0 6px 18px rgba(0,120,140,0.06)",
};

const controlTitle = {
  margin: 0,
  fontSize: 18,
  color: "#dff7ff",
  fontWeight: 700,
};

const smallControl = {
  flex: 1,
  background: "rgba(0,0,0,0.18)",
  borderRadius: 10,
  padding: 12,
  textAlign: "center",
  boxShadow: "inset 0 -6px 12px rgba(0,0,0,0.25)",
};

const iconDot = {
  width: 46,
  height: 46,
  borderRadius: 46,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(10,180,210,0.03)",
  border: "1px solid rgba(80,200,220,0.08)",
  fontSize: 20,
  color: "#9fe8ff",
};
