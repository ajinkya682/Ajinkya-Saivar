import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero-photo.png";
import avatarImg from "../assets/avatar.png";

const IMAGES_TO_PRELOAD = [heroImg, avatarImg];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalCount = IMAGES_TO_PRELOAD.length;
    
    // Fallback safety timeout in case images take too long
    const safetyTimeout = setTimeout(() => {
      finishLoading();
    }, 4000);

    const checkComplete = () => {
      if (loadedCount >= totalCount) {
        clearTimeout(safetyTimeout);
        finishLoading();
      }
    };

    if (totalCount === 0) {
      finishLoading();
      return;
    }

    IMAGES_TO_PRELOAD.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalCount) * 100));
        checkComplete();
      };
      img.onerror = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalCount) * 100));
        checkComplete();
      };
    });

    function finishLoading() {
      setProgress(100);
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete?.();
        }, 600); // Wait for fade out animation
      }, 500); // Pause at 100% before fading out
    }

    return () => clearTimeout(safetyTimeout);
  }, [onComplete]);

  // Smoothly interpolate the progress number for a premium feel
  useEffect(() => {
    let animationFrameId;
    
    const animateProgress = () => {
      setDisplayProgress(prev => {
        const diff = progress - prev;
        if (diff > 0.5) {
          animationFrameId = requestAnimationFrame(animateProgress);
          return prev + diff * 0.15; // Ease factor
        } else {
          return progress;
        }
      });
    };

    if (progress > displayProgress) {
      animationFrameId = requestAnimationFrame(animateProgress);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, displayProgress]);

  const currentDisplay = Math.round(displayProgress);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * currentDisplay) / 100;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#050505", // Always a deep premium dark
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Animated Rings */}
        <div style={{ position: "relative", width: "120px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: "absolute", transform: "rotate(-90deg)" }}>
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
            />
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontSize: "24px", fontWeight: "800", color: "#fff", letterSpacing: "-0.04em" }}
          >
            <span style={{ color: "#6366f1" }}>A</span>S
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
        >
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.3em", marginLeft: "0.3em" }}>
            Initializing
          </span>
          <span style={{ fontSize: "36px", fontWeight: "300", color: "#fff", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
            {currentDisplay}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
