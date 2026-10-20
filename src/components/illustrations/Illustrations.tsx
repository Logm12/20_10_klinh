import React from "react";

export function ChemistryFlask({
  fillPercent = 0,
  glow = false,
  isComplete = false,
  className = "",
}: {
  fillPercent?: number; // 0 to 100
  glow?: boolean;
  isComplete?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient background glow when active */}
      <div
        className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 pointer-events-none ${
          isComplete
            ? "bg-gradient-to-r from-blush-pink via-sage-green to-light-lavender opacity-70 scale-125"
            : glow
            ? "bg-blush-pink opacity-40 scale-110"
            : "opacity-0"
        }`}
      />

      {/* SVG Erlenmeyer Flask */}
      <svg
        viewBox="0 0 240 320"
        className="w-full h-auto drop-shadow-md relative z-10 overflow-visible"
        aria-label="Bình Erlenmeyer điều chế hạnh phúc"
      >
        <defs>
          <linearGradient id="flaskLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6D6DE" />
            <stop offset="50%" stopColor="#DDD5F3" />
            <stop offset="100%" stopColor="#B8CEB5" />
          </linearGradient>

          <linearGradient id="flaskGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>

          <clipPath id="flaskClip">
            <path d="M96 60 L96 110 L28 262 C16 288 35 310 64 310 L176 310 C205 310 224 288 212 262 L144 110 L144 60 Z" />
          </clipPath>
        </defs>

        {/* Liquid Layer inside clip path */}
        <g clipPath="url(#flaskClip)">
          {/* Liquid Base */}
          <rect
            x="0"
            y={320 - (fillPercent / 100) * 230}
            width="240"
            height="320"
            fill="url(#flaskLiquid)"
            className="transition-all duration-700 ease-out"
          />

          {/* Liquid Wave Ripple */}
          {fillPercent > 5 && (
            <path
              d={`M0 ${320 - (fillPercent / 100) * 230} Q60 ${
                314 - (fillPercent / 100) * 230
              } 120 ${320 - (fillPercent / 100) * 230} T240 ${
                320 - (fillPercent / 100) * 230
              } L240 320 L0 320 Z`}
              fill="#ffffff"
              fillOpacity="0.2"
              className="animate-pulse"
            />
          )}

          {/* Bubbles inside flask */}
          {fillPercent > 10 && (
            <>
              <circle cx="90" cy="270" r="5" fill="#ffffff" fillOpacity="0.6" className="animate-bounce" />
              <circle cx="130" cy="240" r="7" fill="#ffffff" fillOpacity="0.5" className="animate-pulse" />
              <circle cx="160" cy="280" r="4" fill="#ffffff" fillOpacity="0.7" />
              <circle cx="110" cy="200" r="6" fill="#ffffff" fillOpacity="0.5" />
            </>
          )}

          {/* Glowing Molecular symbols inside */}
          {fillPercent >= 50 && (
            <g fill="#6B5550" fillOpacity="0.35" className="font-mono text-xs">
              <text x="75" y="270">H₂O</text>
              <text x="135" y="245">🌸</text>
            </g>
          )}
        </g>

        {/* Flask Glass Body Outline */}
        <path
          d="M96 60 L96 110 L28 262 C16 288 35 310 64 310 L176 310 C205 310 224 288 212 262 L144 110 L144 60 Z"
          fill="url(#flaskGlass)"
          stroke="#6B5550"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Flask Rim / Neck Top */}
        <ellipse
          cx="120"
          cy="60"
          rx="28"
          ry="7"
          fill="#FFF9F2"
          stroke="#6B5550"
          strokeWidth="3.5"
        />

        {/* Flask Measurement Marks */}
        <line x1="100" y1="230" x2="114" y2="230" stroke="#6B5550" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="93" y1="190" x2="110" y2="190" stroke="#6B5550" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="88" y1="150" x2="108" y2="150" stroke="#6B5550" strokeWidth="2" strokeOpacity="0.6" />
        <text x="118" y="234" fill="#6B5550" fontSize="9" opacity="0.6" fontFamily="sans-serif">150ml</text>
        <text x="114" y="194" fill="#6B5550" fontSize="9" opacity="0.6" fontFamily="sans-serif">100ml</text>
        <text x="112" y="154" fill="#6B5550" fontSize="9" opacity="0.6" fontFamily="sans-serif">50ml</text>

        {/* Glass reflection highlight */}
        <path
          d="M50 265 C40 250 110 130 110 95"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />

        {/* Blooming Flower on Complete */}
        {isComplete && (
          <g className="animate-in fade-in zoom-in-75 duration-700">
            {/* Stem emerging from neck */}
            <path
              d="M120 55 Q115 25 120 0"
              fill="none"
              stroke="#8BA888"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Leaves */}
            <path
              d="M117 35 Q100 30 102 20 Q115 24 117 35 Z"
              fill="#B8CEB5"
              stroke="#6B5550"
              strokeWidth="1.5"
            />
            <path
              d="M119 25 Q135 20 133 10 Q121 16 119 25 Z"
              fill="#B8CEB5"
              stroke="#6B5550"
              strokeWidth="1.5"
            />

            {/* Bloom flower petals */}
            <g transform="translate(120, -5)">
              <circle cx="-14" cy="-5" r="12" fill="#F6D6DE" stroke="#6B5550" strokeWidth="1.5" />
              <circle cx="14" cy="-5" r="12" fill="#F6D6DE" stroke="#6B5550" strokeWidth="1.5" />
              <circle cx="0" cy="-18" r="12" fill="#F6D6DE" stroke="#6B5550" strokeWidth="1.5" />
              <circle cx="-10" cy="10" r="12" fill="#FCE8ED" stroke="#6B5550" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="12" fill="#FCE8ED" stroke="#6B5550" strokeWidth="1.5" />
              {/* Flower Center */}
              <circle cx="0" cy="0" r="10" fill="#E5C48A" stroke="#6B5550" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}

export function BotanicalBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      className={`fill-current text-sage-green/60 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M60 180 Q60 100 80 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M65 140 Q40 135 45 120 Q60 125 65 140 Z" />
      <path d="M70 105 Q95 100 90 85 Q75 90 70 105 Z" />
      <path d="M75 70 Q50 65 55 50 Q70 55 75 70 Z" />
      <circle cx="80" cy="20" r="6" fill="#F6D6DE" />
    </svg>
  );
}

export function CuteGiftBox({
  isOpen = false,
  className = "",
}: {
  isOpen?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-auto drop-shadow-lg transition-transform duration-500 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCE8ED" />
            <stop offset="100%" stopColor="#F6D6DE" />
          </linearGradient>
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E5C48A" />
            <stop offset="100%" stopColor="#F4D39E" />
          </linearGradient>
        </defs>

        {/* Box Body */}
        <rect
          x="40"
          y="95"
          width="120"
          height="80"
          rx="12"
          fill="url(#boxGrad)"
          stroke="#6B5550"
          strokeWidth="3.5"
        />

        {/* Vertical Ribbon */}
        <rect
          x="88"
          y="95"
          width="24"
          height="80"
          fill="url(#ribbonGrad)"
          stroke="#6B5550"
          strokeWidth="2"
        />

        {/* Box Lid */}
        <g
          className={`transition-all duration-700 ease-out origin-top-left ${
            isOpen
              ? "-translate-y-12 -translate-x-4 -rotate-12 opacity-90"
              : "translate-y-0 rotate-0"
          }`}
        >
          <rect
            x="32"
            y="76"
            width="136"
            height="24"
            rx="8"
            fill="#FFF9F2"
            stroke="#6B5550"
            strokeWidth="3.5"
          />
          <rect
            x="88"
            y="76"
            width="24"
            height="24"
            fill="url(#ribbonGrad)"
            stroke="#6B5550"
            strokeWidth="2"
          />

          {/* Bow on Top */}
          <path
            d="M100 76 C85 50 65 60 88 74 Z"
            fill="url(#ribbonGrad)"
            stroke="#6B5550"
            strokeWidth="2"
          />
          <path
            d="M100 76 C115 50 135 60 112 74 Z"
            fill="url(#ribbonGrad)"
            stroke="#6B5550"
            strokeWidth="2"
          />
          <circle cx="100" cy="76" r="6" fill="#E5C48A" stroke="#6B5550" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
