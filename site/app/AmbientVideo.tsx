"use client";

import { useEffect, useRef } from "react";

type AmbientVideoProps = {
  src: string;
};

export default function AmbientVideo({ src }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    if (!video) return;

    let isNearby = false;
    let observer: IntersectionObserver | undefined;
    let animationFrame = 0;

    const syncPlayback = () => {
      if (typeof video.play !== "function" || typeof video.pause !== "function") return;

      if (motionPreference.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      if (!isNearby || document.hidden) {
        video.pause();
        return;
      }

      void video.play().catch(() => undefined);
    };

    const updateFallbackProximity = () => {
      const rect = video.getBoundingClientRect();
      isNearby = rect.bottom >= -200 && rect.top <= window.innerHeight + 200;
      syncPlayback();
    };

    const scheduleFallbackUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateFallbackProximity);
    };

    if (typeof window.IntersectionObserver === "function") {
      observer = new IntersectionObserver(
        ([entry]) => {
          isNearby = entry.isIntersecting;
          syncPlayback();
        },
        { rootMargin: "200px 0px", threshold: 0.01 },
      );

      observer.observe(video);
    } else {
      updateFallbackProximity();
      window.addEventListener("scroll", scheduleFallbackUpdate, { passive: true });
      window.addEventListener("resize", scheduleFallbackUpdate);
    }

    motionPreference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleFallbackUpdate);
      window.removeEventListener("resize", scheduleFallbackUpdate);
      motionPreference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="journey-video"
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
