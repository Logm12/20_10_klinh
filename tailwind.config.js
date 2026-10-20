/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F2",
        "blush-pink": "#F6D6DE",
        "soft-pink": "#FCE8ED",
        "sage-green": "#B8CEB5",
        "light-lavender": "#DDD5F3",
        "warm-brown": "#6B5550",
        "muted-gold": "#E5C48A",
        "accent-rose": "#E27B88",
        "leaf-green": "#8BA888",
        "soft-border": "#E8D8CF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        handwriting: ["var(--font-dancing)", "cursive"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(107, 85, 80, 0.08)",
        card: "0 14px 35px -10px rgba(107, 85, 80, 0.12)",
        glow: "0 0 25px rgba(246, 214, 222, 0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
