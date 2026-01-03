import './VideoPreview.css'
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoPreview() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [paused, setPaused] = useState(false);

  const concept = JSON.parse(
    sessionStorage.getItem("imaginate_selected_concept")
  );

  useEffect(() => {
    if (!concept) navigate("/imaginate");
  }, [concept, navigate]);

  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setPaused(false);
    setProgress(0);
    setShowContinue(false);
  };

  const handlePause = () => {
    if (!videoRef.current) return;

    if (paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);

    if (percent > 90) setShowContinue(true);
  };

  if (!concept) return null;

  return (
    <div style={styles.page}>
      {/* STAR BACKGROUND */}
      <div style={styles.stars} />
      <div style={styles.stars2} />
      <div style={styles.stars3} />

      {/* LOGO */}
      <div style={styles.logo}>IMAGINATE</div>

      {/* TIMELINE */}
      <div style={styles.timelineWrap}>
        <span style={styles.moon}>🌙</span>

        <div style={styles.timeline}>
          <div
            style={{
              ...styles.timelineFill,
              width: `${progress}%`,
            }}
          />
        </div>

        <span style={styles.sun}>☀️</span>
      </div>

      {/* VIDEO FRAME */}
      <div style={styles.frame}>
        <video
          ref={videoRef}
          src={concept.video}
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          controls={false}
          style={styles.video}
        />
      </div>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <button onClick={handleReplay} style={btn.replay}>
          ⟲ Replay
        </button>

        <button onClick={handlePause} style={btn.pause}>
          {paused ? "▶ Play" : "⏸ Pause"}
        </button>

        {showContinue && (
          <button
            onClick={() => navigate("/imaginate/final-showcase")}
            style={btn.continue}
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top, #0b133d 0%, #050714 70%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "40px 20px",
  },

  /* ⭐ STARS */
  stars: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(1px 1px at 20% 30%, #9fd4ff, transparent)," +
      "radial-gradient(1px 1px at 80% 40%, #ffd1a3, transparent)",
    backgroundSize: "300px 300px",
    animation: "starMove 120s linear infinite",
    zIndex: 0,
  },

  stars2: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(2px 2px at 70% 80%, #ffd8b0, transparent)",
    backgroundSize: "500px 500px",
    animation: "starMoveReverse 180s linear infinite",
    opacity: 0.6,
    zIndex: 0,
  },

  stars3: {
    position: "fixed",
    inset: 0,
    background:
      "radial-gradient(1px 1px at 40% 50%, #ffffff, transparent)",
    backgroundSize: "800px 800px",
    animation: "starFade 240s ease-in-out infinite",
    opacity: 0.4,
    zIndex: 0,
  },

  logo: {
    fontSize: "28px",
    letterSpacing: "3px",
    marginBottom: "22px",
    fontWeight: "700",
    background:
      "linear-gradient(90deg,#5fd1ff,#ffb347)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    zIndex: 2,
  },

  timelineWrap: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "26px",
    zIndex: 2,
  },

  moon: {
    fontSize: "20px",
    filter: "drop-shadow(0 0 10px #6bbcff)",
  },

  sun: {
    fontSize: "20px",
    filter: "drop-shadow(0 0 14px #ffb347)",
  },

  timeline: {
    flex: 1,
    height: "6px",
    background: "rgba(255,255,255,0.18)",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 12px rgba(255,255,255,0.2)",
  },

  timelineFill: {
    height: "100%",
    background:
      "linear-gradient(90deg, #4aa8ff 0%, #ff9f43 100%)",
    boxShadow: "0 0 22px rgba(255,180,90,1)",
    transition: "width 0.15s linear",
  },

  frame: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    padding: "12px",
    borderRadius: "28px",
    background:
      "linear-gradient(135deg, rgba(90,150,255,0.45), rgba(255,160,90,0.4))",
    boxShadow:
      "0 0 90px rgba(0,0,0,0.9), inset 0 0 50px rgba(255,255,255,0.18)",
    zIndex: 2,
  },

  video: {
    width: "100%",
    borderRadius: "20px",
    display: "block",
  },

  controls: {
    marginTop: "36px",
    display: "flex",
    gap: "24px",
    alignItems: "center",
    zIndex: 2,
  },
};

const btn = {
  replay: {
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "16px",
    border: "1px solid rgba(120,180,255,0.4)",
    backdropFilter: "blur(8px)",
    cursor: "pointer",
    boxShadow: "0 0 18px rgba(90,150,255,0.5)",
    transition: "all 0.3s ease",
  },

  pause: {
    background:
      "linear-gradient(135deg, #1c1f3a, #2a2f5a)",
    color: "#fff",
    padding: "14px 32px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.25)",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(150,180,255,0.5)",
    transition: "all 0.3s ease",
  },

  continue: {
    position: "relative",
    background:
      "linear-gradient(90deg, #ffb347, #ffd66b)",
    color: "#000",
    padding: "14px 38px",
    borderRadius: "18px",
    fontWeight: "800",
    border: "none",
    fontSize: "17px",
    cursor: "pointer",
    boxShadow: "0 0 30px rgba(255,200,90,1)",
    transition: "all 0.3s ease",
  },
};

/* ================= HOVER EFFECTS (INLINE STYLE + CSS) ================= */

/* Add this in global CSS */