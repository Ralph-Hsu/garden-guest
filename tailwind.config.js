import plugin from "tailwindcss/plugin";

let font_base = 16;
let font_scale = 1.25;

let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

// 大標題：知芒行（中文行書，Google Fonts）
let fontPrimary = "Zhi Mang Xing";
let fontPrimaryType = "cursive";
// 內文：Open Sans
let fontSecondary = "Open Sans";
let fontSecondaryType = "sans-serif";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  safelist: [],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        // 亮色模式：暖石灰白系
        txt: {
          p: "#292524",      // stone-800（深暖灰，取代純黑）
          s: "#44403c",      // stone-700
          light: "#78716c",  // stone-500
        },
        bg: {
          p: "#fafaf9",      // stone-50（暖石灰白，取代純白）
          s: "#f0ebe4",      // 暖米白
          t: "#e7e0d8",      // 暖米色邊框底色
        },
        border: "#d6cfc7",   // 暖石灰邊框
        // 暗色模式：深石褐系
        darkmode: {
          txt: {
            p: "#fafaf9",    // stone-50
            s: "#d6d3d1",    // stone-300
            light: "#a8a29e", // stone-400
          },
          bg: {
            p: "#1c1917",    // stone-900
            s: "#292524",    // stone-800
            t: "#292524",    // stone-800
          },
          border: "#57534e", // stone-600
        },
        // 庭園點綴色
        garden: {
          amber: "#92400e",  // amber-800（深琥珀木質）
          "amber-light": "#d97706", // amber-600
          rose: "#fb7185",   // rose-400（櫻花粉）
          "rose-deep": "#e11d48", // rose-600
          emerald: "#065f46", // emerald-800（植物深綠）
          "emerald-mid": "#059669", // emerald-600
        },
      },
      minHeight: {
        static_sidemenu: "calc(100vh - 6rem)",
      },
      maxHeight: {
        static_sidemenu: "calc(100vh - 6rem)",
      },
      fontSize: {
        base: font_base + "px",
        h1: h1 + "rem",
        "h1-sm": h1 * 0.8 + "rem",
        h2: h2 + "rem",
        "h2-sm": h2 * 0.8 + "rem",
        h3: h3 + "rem",
        "h3-sm": h3 * 0.8 + "rem",
        h4: h4 + "rem",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "9/16": "56.25%",
      },
      animation: {
        // Intersect
        fade: "fadeIn 1000ms both",
        fadeUp: "fadeInUp 1000ms both",
        fadeDown: "fadeInDown 1000ms both",
        fadeRight: "fadeInRight 1000ms both",
        fadeLeft: "fadeInLeft 1000ms both",
        scale: "scaleOut 1000ms both",
        // Cycle Background
        cycleBg: "cycleBg 60s ease infinite",
      },
      keyframes: {
        // Intersect
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(2rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-2rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-2rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(2rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        scaleOut: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        // Cycle Background
        cycleBg: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
    plugin(({ addVariant }) => {
      addVariant("intersect", "&:not([no-intersect])");
    }),
  ],
};
