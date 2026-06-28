import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import heroImg from "../assets/hero-photo.png";
import avatarImg from "../assets/avatar.png";

const IMAGES_TO_PRELOAD = [heroImg, avatarImg];

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const percentRef = useRef(null);
  const textRef = useRef(null);
  const bgInitialsRef = useRef(null);

  const [actualProgress, setActualProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // 1. Handle actual image loading progress
  useEffect(() => {
    let loadedCount = 0;
    const totalCount = IMAGES_TO_PRELOAD.length;

    // Safety fallback: force completion after 6 seconds
    const safetyTimeout = setTimeout(() => {
      setActualProgress(100);
    }, 6000);

    const checkComplete = () => {
      if (loadedCount >= totalCount) {
        clearTimeout(safetyTimeout);
        setActualProgress(100);
      } else {
        setActualProgress(Math.floor((loadedCount / totalCount) * 100));
      }
    };

    if (totalCount === 0) {
      setActualProgress(100);
      return;
    }

    // Force a small delay at the start so the intro animation breathes
    setTimeout(() => {
      IMAGES_TO_PRELOAD.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          checkComplete();
        };
        img.onerror = () => {
          loadedCount++;
          checkComplete();
        };
      });
    }, 400);

    return () => clearTimeout(safetyTimeout);
  }, []);

  // 2. Smoothly animate the display progress and line scale
  useEffect(() => {
    // We animate a proxy object so the percentage numbers tick up luxuriously
    const progressObj = { value: displayProgress };

    gsap.to(progressObj, {
      value: actualProgress,
      duration: 1.8, // Smooth interpolation time
      ease: "power2.out",
      onUpdate: () => {
        const currentVal = Math.round(progressObj.value);
        setDisplayProgress(currentVal);

        // Scale the line based on current display progress
        if (lineRef.current) {
          gsap.set(lineRef.current, { scaleX: currentVal / 100 });
        }
      },
    });
  }, [actualProgress, displayProgress]);

  // 3. Handle Completion Animation
  useEffect(() => {
    if (displayProgress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete,
          });
        },
      });

      // When 100% is reached, fade out the loader elements elegantly
      tl.to(
        textRef.current,
        {
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.4",
      );

      tl.to(
        lineRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "<",
      );

      tl.to(
        percentRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "<",
      );

      tl.play();
    }
  }, [displayProgress, onComplete]);

  // 4. Initial Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      textRef.current,
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power3.out",
      },
      0.2,
    );

    tl.to(
      bgInitialsRef.current,
      {
        opacity: 0.04, // Very subtle watermark
        scale: 1,
        duration: 2.5,
        ease: "power3.out",
      },
      0,
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-background"
    >
      {/* Background Initials - Super Subtle */}
      <div
        ref={bgInitialsRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 scale-110"
      >
        <span className="text-[45vw] font-bold text-(--text) tracking-tighter leading-none select-none font-heading-dynamic">
          AS
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-8">
        {/* Main Brand Text */}
        <div
          ref={textRef}
          className="flex flex-col items-center mb-12 opacity-0"
          style={{ filter: "blur(15px)" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.25em] text-(--text) text-center leading-tight font-heading-dynamic">
            AJINKYA
            <br />
            SAIVAR
          </h1>
          <p className="mt-6 text-xs md:text-sm font-medium tracking-[0.35em] text-(--secondary) uppercase">
            Full-Stack Developer
          </p>
        </div>

        {/* Loading Line Wrapper */}
        <div className="w-full h-0.5 bg-(--border) relative overflow-hidden rounded-full">
          {/* Active Loading Line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full h-full bg-(--primary) origin-left scale-x-0"
          />
        </div>

        {/* Percentage */}
        <div
          ref={percentRef}
          className="mt-8 text-base md:text-lg font-medium tabular-nums text-(--primary) tracking-widest flex items-center gap-3"
        >
          <span className="uppercase text-[10px] md:text-xs tracking-[0.25em] text-(--secondary)">
            Loading
          </span>
          {displayProgress}%
        </div>
      </div>
    </div>
  );
}
