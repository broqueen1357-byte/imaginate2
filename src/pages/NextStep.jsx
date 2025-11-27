export default function NextStep() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0f29, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      {/* FEEDBACK CARD */}
      <div
        style={{
          width: "420px",
          padding: "35px",
          borderRadius: "25px",
          background: "rgba(15, 20, 40, 0.85)",
          boxShadow:
            "0 0 25px rgba(80, 120, 255, 0.4), inset 0 0 25px rgba(80,120,255,0.2)",
          border: "1px solid rgba(80,120,255,0.6)",
          color: "#dbe3ff"
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "10px",
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          Your Voice Shapes Imaginate
        </h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#8892b0"
          }}
        >
          Tell us what you think — your feedback builds the future.
        </p>

        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,120,255,0.4)",
            color: "white",
            marginBottom: "15px",
            outline: "none"
          }}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,120,255,0.4)",
            color: "white",
            marginBottom: "15px",
            outline: "none"
          }}
        />

        {/* FEEDBACK BOX */}
        <textarea
          placeholder="Feedback"
          style={{
            width: "100%",
            padding: "14px",
            height: "110px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,120,255,0.4)",
            color: "white",
            marginBottom: "20px",
            outline: "none",
            resize: "none"
          }}
        />

        {/* STAR RATING */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
            gap: "10px"
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: "28px",
                cursor: "pointer",
                color: i < 4 ? "#4d7dff" : "#1a2750"
              }}
            >
              ★
            </span>
          ))}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            background:
              "linear-gradient(90deg, #3d6cff, #6f92ff)",
            boxShadow: "0 0 20px rgba(80,120,255,0.5)",
            color: "white",
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

