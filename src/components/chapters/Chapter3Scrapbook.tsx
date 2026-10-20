"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalConfig, MemoryItem } from "@/content/personal";
import { SectionBadge } from "@/components/ui/AmbientElements";
import { Heart, ArrowDown, Image as ImageIcon } from "lucide-react";

interface Chapter3Props {
  onNextChapter: () => void;
}

export function Chapter3Scrapbook({ onNextChapter }: Chapter3Props) {
  const { chapter3 } = personalConfig;
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="chapter-3"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16 text-center"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center z-10">
        <SectionBadge>
          <Heart className="w-3.5 h-3.5 text-accent-rose" />
          <span>{chapter3.badge}</span>
        </SectionBadge>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-brown font-bold tracking-tight mb-3">
          {chapter3.title}
        </h2>

        <p className="text-sm sm:text-base text-warm-brown/80 max-w-xl mb-3 leading-relaxed">
          {chapter3.subtitle}
        </p>

        <p className="text-xs text-warm-brown/60 mb-8 italic">
          💡 {chapter3.hint}
        </p>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
          {chapter3.memories.map((item: MemoryItem, idx: number) => {
            const isFlipped = flippedIds.includes(item.id);
            const hasError = imageErrors[item.id] || !item.imageSrc;

            // Slight organic rotations for scrapbook realism
            const rotations = ["-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];
            const rotClass = rotations[idx % rotations.length];

            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFlip(item.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ảnh polaroid: ${item.title}. Nhấn để lật xem ghi chú.`}
                className={`group relative bg-white p-3.5 sm:p-4 rounded-2xl shadow-card border border-soft-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-accent-rose ${rotClass}`}
              >
                {/* Cute Sticker */}
                <span className="absolute -top-3.5 -right-2 text-2xl drop-shadow select-none z-20">
                  {item.sticker || "🌷"}
                </span>

                {/* Photo Frame Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-cream border border-soft-border/60 flex items-center justify-center">
                  {!isFlipped ? (
                    // Front side: Image or Tasteful Placeholder
                    !hasError ? (
                      <Image
                        src={item.imageSrc!}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-soft-pink/40 to-sage-green/20 w-full h-full">
                        <ImageIcon className="w-8 h-8 text-warm-brown/40 mb-2" />
                        <span className="text-xs text-warm-brown/70 font-medium px-2">
                          {item.imagePlaceholderText}
                        </span>
                        <span className="text-[10px] text-warm-brown/40 mt-1">
                          (Chạm để xem lời nhắn)
                        </span>
                      </div>
                    )
                  ) : (
                    // Back side: Note revealed on click
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-cream w-full h-full animate-in fade-in duration-300">
                      <span className="text-xs uppercase font-mono tracking-wider text-accent-rose font-bold mb-1">
                        {item.tag}
                      </span>
                      <p className="text-xs sm:text-sm text-warm-brown/90 leading-relaxed font-serif">
                        &ldquo;{item.description}&rdquo;
                      </p>
                      <span className="text-[10px] text-warm-brown/40 mt-2">
                        Chạm lại để xem ảnh
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Caption Area */}
                <div className="mt-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-warm-brown">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cream text-warm-brown/60">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-warm-brown/60 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition prompt to chapter 4 */}
        <div className="animate-in fade-in duration-500">
          <button
            onClick={onNextChapter}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-soft-pink border border-blush-pink text-warm-brown font-medium text-sm sm:text-base hover:bg-blush-pink transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-rose"
          >
            <span>Mở bức thư anh gửi em</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
