"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { personalConfig } from "@/content/personal";
import { SectionBadge } from "@/components/ui/AmbientElements";
import { Mail, RotateCcw, Heart, Sparkles, CheckCircle2 } from "lucide-react";

interface Chapter4Props {
  onReplay: () => void;
}

export function Chapter4Letter({ onReplay }: Chapter4Props) {
  const { chapter4, brother, sister } = personalConfig;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    // Celebration sparkles
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#F6D6DE", "#B8CEB5", "#E5C48A", "#DDD5F3"],
    });
  };

  return (
    <section
      id="chapter-4"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16 text-center"
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center z-10">
        <SectionBadge>
          <Mail className="w-3.5 h-3.5 text-accent-rose" />
          <span>{chapter4.badge}</span>
        </SectionBadge>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-brown font-bold tracking-tight mb-3">
          {chapter4.title}
        </h2>

        <p className="text-sm sm:text-base text-warm-brown/80 max-w-xl mb-8 leading-relaxed">
          {chapter4.subtitle}
        </p>

        {/* Letter Envelope / Letter Container */}
        <div className="w-full relative">
          {!isOpen ? (
            // Envelope view
            <div
              onClick={handleOpenLetter}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenLetter();
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Chạm để mở phong thư"
              className="group cursor-pointer max-w-md mx-auto p-8 rounded-3xl bg-cream border-2 border-dashed border-blush-pink shadow-card hover:border-accent-rose transition-all duration-300 hover:scale-102 flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-blush-pink"
            >
              <div className="w-20 h-20 rounded-full bg-soft-pink flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                💌
              </div>
              <h3 className="font-serif text-lg font-bold text-warm-brown mb-1">
                Gửi riêng cho {sister.name}
              </h3>
              <p className="text-xs text-warm-brown/60 mb-5">
                Chứa đựng những lời tâm sự chân thành nhất
              </p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-rose text-white text-sm font-medium shadow-sm group-hover:bg-accent-rose/90 transition-all">
                <span>Chạm để mở thư</span>
                <Heart className="w-4 h-4 fill-white" />
              </span>
            </div>
          ) : (
            // Unfolded Letter Paper View
            <div className="relative text-left bg-[#FFFDF9] border border-[#E9DFD8] p-6 sm:p-10 md:p-12 rounded-3xl shadow-soft animate-in fade-in zoom-in-95 duration-700">
              {/* Paper Decorative Stamp */}
              <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-16 h-20 rounded border-2 border-dashed border-accent-rose/40 bg-soft-pink/30 p-1 text-center select-none">
                <span className="text-xs">🌷</span>
                <span className="text-[9px] font-mono uppercase text-accent-rose font-bold">
                  20.10
                </span>
                <span className="text-[8px] text-warm-brown/60">GIFT</span>
              </div>

              {/* Letter Date */}
              <div className="text-xs sm:text-sm font-mono text-warm-brown/60 mb-4">
                {chapter4.letterDate}
              </div>

              {/* Salutation */}
              <h3 className="text-lg sm:text-xl font-serif font-bold text-accent-rose mb-5">
                {chapter4.letterSalutation}
              </h3>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-warm-brown/85 text-sm sm:text-base leading-relaxed font-sans">
                {chapter4.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Wishes List */}
              <div className="my-6 p-4 rounded-2xl bg-cream/80 border border-soft-border/70 space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider font-bold text-warm-brown/70 mb-2">
                  Lời chúc gửi đến em:
                </div>
                {chapter4.wishes.map((wish, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-warm-brown font-medium">
                    <CheckCircle2 className="w-4 h-4 text-leaf-green flex-shrink-0" />
                    <span>{wish}</span>
                  </div>
                ))}
              </div>

              {/* Closing Sign-off */}
              <div className="mt-8 pt-4 border-t border-soft-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <p className="text-sm italic font-serif text-warm-brown/80 max-w-md">
                  &ldquo;{chapter4.closing}&rdquo;
                </p>

                <div className="text-right sm:text-right w-full sm:w-auto">
                  <div className="text-xs text-warm-brown/60 font-mono">Thương mến,</div>
                  <div className="text-lg sm:text-xl font-handwriting font-bold text-accent-rose">
                    {brother.signOff}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Final Scene Greeting & Replay CTA */}
        {isOpen && (
          <div className="mt-12 text-center animate-in fade-in duration-1000 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-warm-brown font-serif text-base sm:text-lg mb-4">
              <Sparkles className="w-4 h-4 text-muted-gold" />
              <span>Chúc em gái Khánh Linh một ngày 20/10 thật hạnh phúc! 🌸</span>
              <Sparkles className="w-4 h-4 text-muted-gold" />
            </div>

            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cream border border-soft-border text-warm-brown/80 hover:text-warm-brown hover:bg-blush-pink/40 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-rose"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Xem lại từ đầu</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
