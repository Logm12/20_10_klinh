"use client";

import React from "react";
import { Chapter1Surprise } from "@/components/chapters/Chapter1Surprise";
import { Chapter2Recipe } from "@/components/chapters/Chapter2Recipe";
import { Chapter3Scrapbook } from "@/components/chapters/Chapter3Scrapbook";
import { Chapter4Letter } from "@/components/chapters/Chapter4Letter";
import { FloatingPetals } from "@/components/ui/AmbientElements";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { personalConfig } from "@/content/personal";

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Ambient background botanical animations */}
      <FloatingPetals />

      {/* Background audio player (graceful fallback if no file) */}
      <AudioPlayer />

      {/* Four Interconnected Story Chapters */}
      <div className="flex flex-col w-full relative z-10">
        <Chapter1Surprise onNextChapter={() => scrollTo("chapter-2")} />

        <div className="w-full flex items-center justify-center py-4">
          <div className="w-16 h-0.5 bg-blush-pink/40 rounded-full" />
        </div>

        <Chapter2Recipe onNextChapter={() => scrollTo("chapter-3")} />

        <div className="w-full flex items-center justify-center py-4">
          <div className="w-16 h-0.5 bg-sage-green/40 rounded-full" />
        </div>

        <Chapter3Scrapbook onNextChapter={() => scrollTo("chapter-4")} />

        <div className="w-full flex items-center justify-center py-4">
          <div className="w-16 h-0.5 bg-light-lavender/60 rounded-full" />
        </div>

        <Chapter4Letter onReplay={handleReplay} />
      </div>

      {/* Gentle Footer */}
      <footer className="w-full py-8 text-center text-xs text-warm-brown/60 border-t border-soft-border/40 relative z-10 bg-cream/80 backdrop-blur-sm">
        <p>
          Được chuẩn bị với tất cả thương yêu dành cho em gái {personalConfig.sister.name} • 20/10/2026
        </p>
        <p className="mt-1 text-[11px] text-warm-brown/40">
          {personalConfig.brother.signOff} 🌷
        </p>
      </footer>
    </main>
  );
}
