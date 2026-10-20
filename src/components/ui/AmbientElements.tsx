import React from "react";

export function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Gentle floating leaves and petals */}
      <span
        className="absolute top-[10%] left-[8%] text-blush-pink/40 text-2xl animate-float"
        style={{ animationDuration: "8s", animationDelay: "0s" }}
      >
        🌸
      </span>
      <span
        className="absolute top-[25%] right-[10%] text-sage-green/40 text-xl animate-float"
        style={{ animationDuration: "10s", animationDelay: "1s" }}
      >
        🌿
      </span>
      <span
        className="absolute top-[55%] left-[5%] text-blush-pink/30 text-lg animate-float"
        style={{ animationDuration: "9s", animationDelay: "2s" }}
      >
        🍃
      </span>
      <span
        className="absolute top-[75%] right-[7%] text-muted-gold/40 text-xl animate-float"
        style={{ animationDuration: "7s", animationDelay: "0.5s" }}
      >
        ✨
      </span>
      <span
        className="absolute top-[88%] left-[12%] text-sage-green/30 text-xl animate-float"
        style={{ animationDuration: "11s", animationDelay: "1.5s" }}
      >
        🌱
      </span>
    </div>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-pink/80 border border-blush-pink text-warm-brown/90 text-xs sm:text-sm font-medium shadow-sm mb-4">
      {children}
    </div>
  );
}
