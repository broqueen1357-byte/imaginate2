// src/pages/imaginate/VideoPreview.jsx

import "./VideoPreview.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { interpretationModes } from "../../data/interpretationModes";

export default function VideoPreview() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [paused, setPaused] = useState(false);

  // 🔑 Selected concept (single source of truth)
  const concept = JSON.parse(
    sessionStorage.getItem("imaginate_selected_concept")
  );

  useEffect(() => {
    if (!concept) navigate("/imaginate");
  }, [concept, navigate]);

  if (!concept) return null;

  const mode = interpretationModes[concept.interpretationMode];
  const videoSrc = `/videos/${concept.interpretationMode}.mp4`;

  // ===== Controls =====
  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setPaused(false);
    setProgress(0);
    setShowContinue(false);
  };

  const handlePause = () => {
    if (!videoRef.current) return;

    if (paused) videoRef.current.play();
    else videoRef.current.pause();

    setPaused(!paused);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);

    if (percent > 90) setShowContinue(true);
  };

  return (
    <div style={styles.page}>
      {/* Background */}
      <div style={styles.stars} />
      <div style={styles.stars2} />
      <div style={styles.stars3} />

      {/* Logo */}
      <div style={styles.logo}>IMAGINATE</div>

      {/* Concept Info */}
      <div style={styles.info}>
        <h2 style={styles.title}>{concept.title}</h2>
        <p style={styles.desc}>{concept.description}</p>

        <div style={styles.explain}>
          This video explores one possible <strong>visual direction</strong>{" "}
          Imaginate interpreted through the{" "}
          <strong>{mode?.title}</strong> lens.  
          It’s not a final product — it’s a direction to think with.
        </div>
      </div>

      {/* Timeline */}
      <div style={styles.timelineWrap}>
        <span>🌙</span>
        <div style={styles.timeline}>
          <div
            style={{
              ...styles.timelineFill,
              width: `${progress}%`,
            }}
          />
        </div>
        <span>☀️</span>
      </div>

      {/* Video */}
      <div style={styles.frame}>
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          style={styles.video}
        />
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <button onClick={handleReplay} style={btn.secondary}>
          ⟲ Replay
        </button>

        <button onClick={handlePause} style={btn.secondary}>
          {paused ? "▶ Play" : "⏸ Pause"}
        </button>

        <button
          onClick={() => navigate("/imaginate/3d-result")}
          style={btn.secondary}
        >
          ← Change direction
        </button>

        {showContinue && (
          <button
            onClick={() => navigate("/imaginate/final-showcase")}
            style={btn.primary}
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}

// ===== Styles =====

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050b18",
    color: "#e6f7ff",
    padding: "24px",
    textAlign: "center",
  },
  logo: {
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 16,
    opacity: 0.9,
  },
  info: {
    maxWidth: 680,
    margin: "0 auto 16px",
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 6,
    color: "#9fe8ff",
  },
  desc: {
    opacity: 0.85,
    marginBottom: 12,
  },
  explain: {
    fontSize: 14,
    opacity: 0.7,
    background: "rgba(255,255,255,0.05)",
    padding: 12,
    borderRadius: 10,
  },
  frame: {
    maxWidth: 900,
    margin: "20px auto",
    borderRadius: 16,
    overflow: "hidden",
    background: "#000",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  timelineWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    maxWidth: 500,
    margin: "20px auto",
  },
  timeline: {
    flex: 1,
    height: 6,
    background: "rgba(255,255,255,0.2)",
    borderRadius: 4,
    overflow: "hidden",
  },
  timelineFill: {
    height: "100%",
    background: "#7fffd4",
  },
  controls: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginTop: 20,
  },
  stars: {},
  stars2: {},
  stars3: {},
};

const btn = {
  primary: {
    padding: "12px 20px",
    borderRadius: 12,
    fontWeight: 700,
    background: "#7fffd4",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },
  secondary: {
    padding: "12px 18px",
    borderRadius: 12,
    fontWeight: 600,
    background: "transparent",
    color: "#9fe8ff",
    border: "1px solid rgba(159,232,255,0.4)",
    cursor: "pointer",
  },
};