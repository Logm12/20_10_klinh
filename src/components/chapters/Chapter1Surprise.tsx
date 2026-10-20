"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { personalConfig } from "@/content/personal";
import { CuteGiftBox } from "@/components/illustrations/Illustrations";
import { SectionBadge } from "@/components/ui/AmbientElements";
import { Sparkles, ArrowDown } from "lucide-react";

interface Chapter1Props {
  onNextChapter: () => void;
}

export function Chapter1Surprise({ onNextChapter }: Chapter1Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { chapter1, sister } = personalConfig;

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true);

      // Trigger soft botanical confetti colors
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#F6D6DE", "#B8CEB5", "#DDD5F3", "#E5C48A"],
      });
    }
  };

  return (
    <section
      id="chapter-1"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16 text-center select-none"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center z-10">
        <SectionBadge>
          <Sparkles className="w-3.5 h-3.5 text-accent-rose" />
          <span>{chapter1.badge}</span>
        </SectionBadge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-brown font-bold tracking-tight mb-3">
          {chapter1.headline}{" "}
          <span className="text-accent-rose relative inline-block">
            {sister.name}
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blush-pink rounded-full -z-10" />
          </span>
        </h1>

        <p className="text-sm sm:text-base text-warm-brown/80 max-w-lg mb-8 leading-relaxed">
          {chapter1.subheadline}
        </p>

        {/* Interactive Gift Box */}
        <div
          onClick={handleOpenGift}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpenGift();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={isOpen ? "Hộp quà đã mở" : chapter1.openBoxCta}
          className="cursor-pointer group focus:outline-none focus:ring-4 focus:ring-blush-pink rounded-3xl p-4 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
            <CuteGiftBox isOpen={isOpen} className="w-full h-full" />
          </div>

          <div className="mt-4">
            {!isOpen ? (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-soft-pink border border-blush-pink text-warm-brown font-medium text-sm sm:text-base shadow-soft hover:bg-blush-pink transition-colors">
                {chapter1.openBoxCta}
              </span>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-base sm:text-lg font-serif italic text-warm-brown font-medium max-w-md mx-auto bg-cream/90 backdrop-blur-sm p-4 rounded-2xl border border-blush-pink shadow-card">
                  &ldquo;{chapter1.openedQuote}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Transition prompt to chapter 2 */}
        {isOpen && (
          <div className="mt-8 animate-in fade-in duration-700">
            <button
              onClick={onNextChapter}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-green/30 border border-sage-green text-warm-brown font-medium text-sm sm:text-base hover:bg-sage-green/50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-green"
            >
              <span>Ghé thăm phòng điều chế hạnh phúc</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
