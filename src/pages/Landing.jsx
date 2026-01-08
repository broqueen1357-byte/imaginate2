// src/pages/Landing.jsx
import React, { useEffect } from "react";

export default function Landing() {
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const canvas = document.getElementById("particlesCanvas");
    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 30;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(78,203,255,0.3)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        color: "#e6f7ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: isMobile ? 20 : 40,
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        gap: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particles Canvas */}
      <canvas
        id="particlesCanvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
        <h1
          style={{
            fontSize: isMobile ? 30 : 50,
            fontWeight: 800,
            background: "linear-gradient(90deg,#4ecbff,#00aaff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "pulseText 2.5s infinite",
            margin: 0,
          }}
        >
          IMAGINATE
        </h1>

        {/* Animated paragraphs */}
        <h2 className="fade-in" style={{ animationDelay: "0.3s" }}>
          Explore Visual Directions for Your Ideas
        </h2>
        <p className="fade-in" style={{ animationDelay: "0.6s", fontSize: "19px" }}>
          Describe your idea. Upload an image to explore possible visual interpretations and concept directions
        </p>
        <p className="fade-in" style={{ animationDelay: "0.9s", fontSize: "19px" }}>
          Imaginate is an early-stage exploration tool designed to help you think visually,
          not deliver final AI outputs.
        </p>
        <p className="fade-in" style={{ animationDelay: "1.2s" }}>
          Fast. Visual. Intuitive. From imagination to visualization — one click,
          zero hassle.
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 32,
          flexWrap: "wrap",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {[
          { text: "Start Imaginating", href: "/imaginate", primary: true },
          { text: "Explore Concepts", href: "/explore" },
          { text: "Login", href: "/login", small: true },
        ].map((btn, idx) => (
          <button
            key={btn.text}
            className="glow-button bounce-in fade-in"
            onClick={() => (window.location.href = btn.href)}
            style={{
              padding: btn.small
                ? "12px 20px"
                : btn.primary
                ? "14px 28px"
                : "14px 26px",
              fontSize: btn.small ? 14 : btn.primary ? 16 : 15,
              fontWeight: btn.primary ? 700 : 600,
              color: btn.primary ? "#001018" : btn.small ? "#bcdff0" : "#9fe8ff",
              background: btn.primary
                ? "linear-gradient(90deg,#4ecbff,#00aaff)"
                : "transparent",
              border: btn.primary
                ? "none"
                : btn.small
                ? "none"
                : "1px solid rgba(78,203,255,0.5)",
              borderRadius: 12,
              cursor: "pointer",
              boxShadow: btn.primary
                ? "0 10px 25px rgba(78,203,255,0.35)"
                : "0 6px 15px rgba(78,203,255,0.15)",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",
              animationDelay: `${1.5 + idx * 0.2}s`, // cinematic stagger
            }}
          >
            {btn.text}
          </button>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes pulseText {
          0% { filter: drop-shadow(0 0 4px #4ecbff); }
          50% { filter: drop-shadow(0 0 16px #00aaff); }
          100% { filter: drop-shadow(0 0 4px #4ecbff); }
        }

        .glow-button::before {
          content: '';
          position: absolute;
          top: var(--y, 50%);
          left: var(--x, 50%);
          width: 150px;
          height: 150px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(78,203,255,0.35) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
          border-radius: 50%;
        }
        .glow-button:hover::before { opacity: 1; }
        .glow-button:hover { transform: translateY(-4px); box-shadow: 0 20px 35px rgba(78,203,255,0.5); }

        @keyframes bounceIn {
          0% { transform: translateY(50px); opacity: 0; }
          60% { transform: translateY(-10px); opacity: 1; }
          80% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }
        .bounce-in { animation: bounceIn 0.8s forwards; }

        /* Fade-in animation for paragraphs and buttons */
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
      `}</style>
    </div>
  );
}