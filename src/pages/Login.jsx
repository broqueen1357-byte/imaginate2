export default function Login() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #071021, #000)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "70px",
        color: "white",
      }}
    >
      {/* IMAGINATE TITLE */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#6ecbff",
          textShadow: "0 0 25px #3db7ff",
          letterSpacing: "2px",
        }}
      >
        IMAGINATE
      </h1>

      {/* LOGIN CARD */}
      <div
        style={{
          width: "400px",
          padding: "35px 30px",
          borderRadius: "25px",
          background: "rgba(10, 14, 30, 0.85)",
          border: "1px solid rgba(80,180,255,0.55)",
          boxShadow:
            "0 0 25px rgba(80,180,255,0.4), inset 0 0 20px rgba(20,60,120,0.3)",
        }}
      >
        {/* LOGIN HEADING */}
        <h2
          style={{
            marginBottom: "25px",
            fontSize: "26px",
            fontWeight: "600",
          }}
        >
          Login
        </h2>

        {/* EMAIL INPUT */}
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,150,255,0.4)",
            color: "white",
            outline: "none",
          }}
        />

        {/* PASSWORD INPUT */}
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "12px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,150,255,0.4)",
            color: "white",
            outline: "none",
          }}
        />

        {/* REMEMBER ME */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "25px",
          }}
        >
          <input
            type="checkbox"
            style={{
              width: "18px",
              height: "18px",
              accentColor: "#5cbcff",
              cursor: "pointer",
            }}
          />
          <span style={{ fontSize: "15px", color: "#a8b8ff" }}>
            Remember me
          </span>
        </div>

        {/* LOGIN BUTTON */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            background:
              "linear-gradient(90deg, #38a9ff, #6bc9ff)",
            color: "black",
            fontSize: "18px",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            boxShadow:
              "0 0 22px rgba(80,170,255,0.55), inset 0 0 15px rgba(255,255,255,0.15)",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
