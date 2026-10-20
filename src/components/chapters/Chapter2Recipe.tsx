"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { personalConfig, HappinessIngredient } from "@/content/personal";
import { ChemistryFlask } from "@/components/illustrations/Illustrations";
import { SectionBadge } from "@/components/ui/AmbientElements";
import { Sparkles, ArrowDown, Check, FlaskConical } from "lucide-react";

interface Chapter2Props {
  onNextChapter: () => void;
}

export function Chapter2Recipe({ onNextChapter }: Chapter2Props) {
  const { chapter2 } = personalConfig;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const isComplete = selectedIds.length === chapter2.ingredients.length;
  const fillPercent = (selectedIds.length / chapter2.ingredients.length) * 100;

  const handleSelectIngredient = (item: HappinessIngredient) => {
    if (!selectedIds.includes(item.id)) {
      const updated = [...selectedIds, item.id];
      setSelectedIds(updated);

      if (updated.length === chapter2.ingredients.length) {
        // Grand gentle confetti celebration
        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.5 },
            colors: ["#F6D6DE", "#B8CEB5", "#DDD5F3", "#E5C48A"],
          });
        }, 300);
      }
    }
  };

  const handleReset = () => {
    setSelectedIds([]);
  };

  return (
    <section
      id="chapter-2"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16 text-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center z-10">
        <SectionBadge>
          <FlaskConical className="w-3.5 h-3.5 text-sage-green" />
          <span>{chapter2.badge}</span>
        </SectionBadge>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-brown font-bold tracking-tight mb-3">
          {chapter2.title}
        </h2>

        <p className="text-sm sm:text-base text-warm-brown/80 max-w-xl mb-8 leading-relaxed">
          {chapter2.subtitle}
        </p>

        {/* Layout Grid: Left is Flask, Right is Ingredients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-3xl bg-cream/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-soft-border shadow-card">
          {/* Flask Container */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="w-48 sm:w-56 h-auto">
              <ChemistryFlask
                fillPercent={fillPercent}
                glow={selectedIds.length > 0}
                isComplete={isComplete}
              />
            </div>

            <div className="mt-4 text-xs sm:text-sm font-medium text-warm-brown/70">
              Tiến độ điều chế: {selectedIds.length} / {chapter2.ingredients.length} thành phần
            </div>
          </div>

          {/* Ingredients Selection List */}
          <div className="flex flex-col gap-3 text-left">
            <p className="text-xs sm:text-sm font-medium text-warm-brown/80 mb-1">
              {chapter2.instructions}
            </p>

            {chapter2.ingredients.map((item) => {
              const isAdded = selectedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectIngredient(item)}
                  disabled={isAdded}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                    isAdded
                      ? "bg-sage-green/15 border-sage-green/40 opacity-70 cursor-default"
                      : "bg-white/80 border-soft-border hover:border-blush-pink hover:bg-soft-pink/30 hover:scale-[1.02] shadow-sm active:scale-95 cursor-pointer"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-semibold text-warm-brown text-sm sm:text-base">
                        {item.name}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cream border border-soft-border text-warm-brown/70">
                        {item.scienceName}
                      </span>
                    </div>
                    <p className="text-xs text-warm-brown/70 mt-1 line-clamp-2">
                      {item.note}
                    </p>
                  </div>

                  {isAdded && (
                    <div className="w-6 h-6 rounded-full bg-sage-green text-white flex items-center justify-center flex-shrink-0 self-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reaction Completed Announcement */}
        {isComplete && (
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-soft-pink via-cream to-sage-green/20 border border-blush-pink shadow-soft max-w-xl animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-center gap-2 text-accent-rose font-serif text-lg font-bold mb-2">
              <Sparkles className="w-5 h-5" />
              <span>{chapter2.completionTitle}</span>
            </div>
            <p className="text-sm text-warm-brown/90 leading-relaxed mb-4">
              {chapter2.completionMessage}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="text-xs text-warm-brown/60 hover:text-warm-brown underline px-2 py-1"
              >
                Làm lại phản ứng
              </button>

              <button
                onClick={onNextChapter}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-rose text-white font-medium text-sm sm:text-base shadow-sm hover:bg-accent-rose/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent-rose"
              >
                <span>Xem những điều bé nhỏ về em</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
