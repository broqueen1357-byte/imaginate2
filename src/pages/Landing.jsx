import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "white",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(80,180,255,0.40)",
          boxShadow: "0 0 25px rgba(0,150,255,0.45)",
          textAlign: "center",
          backgroundImage: "url('/space.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "700",
            marginBottom: "10px",
            color: "#6ecbff",
            textShadow: "0 0 32px #3db7ff",
          }}
        >
          IMAGINATE
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "22px",
            marginBottom: "50px",
            textShadow: "0 0 10px black",
          }}
        >
          You’ve just stepped into a universe  
          of creation where imagination  
          becomes visual.
        </p>

        {/* START IMAGINATING BUTTON */}
        <button
          onClick={() => navigate("/imaginate")}
          style={{
            padding: "15px 45px",
            fontSize: "22px",
            fontWeight: "700",
            borderRadius: "15px",
            background: "linear-gradient(90deg, #009dff, #00d5ff)",
            color: "black",
            border: "none",
            cursor: "pointer",
            marginBottom: "60px",
            boxShadow: "0 0 25px rgba(0,160,255,0.6)",
          }}
        >
          Start Imaginating
        </button>

        {/* BOTTOM BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* ABOUT */}
          <Link
            to="/about"
            style={{
              padding: "10px 35px",
              borderRadius: "12px",
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(80,180,255,0.4)",
              color: "#6ecbff",
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 0 12px rgba(0,150,255,0.4)",
            }}
          >
            About
          </Link>

          {/* EXPLORE */}
          <Link
            to="/explore"
            style={{
              padding: "10px 35px",
              borderRadius: "12px",
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(80,180,255,0.4)",
              color: "#6ecbff",
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 0 12px rgba(0,150,255,0.4)",
            }}
          >
            Explore
          </Link>

          {/* LOGIN */}
          <Link
            to="/login"
            style={{
              padding: "10px 35px",
              borderRadius: "12px",
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(80,180,255,0.4)",
              color: "#6ecbff",
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 0 12px rgba(0,150,255,0.4)",
            }}
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
