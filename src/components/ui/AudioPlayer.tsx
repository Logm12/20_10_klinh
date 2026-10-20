"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { personalConfig } from "@/content/personal";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleError = () => {
      // Graceful degradation when audio file doesn't exist
      setHasError(true);
    };

    audio.addEventListener("error", handleError);
    return () => {
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Playback blocked or failed
          setHasError(true);
        });
    }
  };

  // If audio is disabled or file failed to load, don't show broken controls
  if (!personalConfig.audio.enabled || hasError) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio ref={audioRef} src={personalConfig.audio.src} loop preload="none" />
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền dịu êm"}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-cream/90 backdrop-blur-md border border-soft-border text-warm-brown shadow-soft hover:bg-blush-pink/40 transition-all text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-rose"
      >
        <Music className={`w-4 h-4 text-accent-rose ${isPlaying ? "animate-spin" : ""}`} />
        <span className="hidden sm:inline">
          {isPlaying ? personalConfig.audio.title : "Bật nhạc nhẹ"}
        </span>
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-leaf-green" />
        ) : (
          <VolumeX className="w-4 h-4 text-warm-brown/60" />
        )}
      </button>
    </div>
  );
}
