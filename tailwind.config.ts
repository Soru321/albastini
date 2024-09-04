import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        light: "hsl(var(--light))",
        "light-2": "hsl(var(--light-2))",
        "light-3": "hsl(var(--light-3))",

        dark: "hsl(var(--dark))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",

        "4xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      dropShadow: {
        dark: "0 0 10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".bg-accent-gradient": {
          "background-image":
            "linear-gradient(to bottom right, #FAE776, #DBB349)",
        },
        ".text-accent-gradient": {
          "background-image":
            "linear-gradient(to bottom right, #FAE776, #DBB349)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },

        ".bg-dark-gradient": {
          "background-image":
            "linear-gradient(to bottom right, #373C3F, #10171B)",
        },
        ".bg-dark-gradient-2": {
          "background-image": "linear-gradient(to bottom, #10171B, #373C3F)",
        },
        ".bg-dark-gradient-3": {
          "background-image":
            "linear-gradient(to bottom right, #10171B, #373C3F)",
        },

        ".bg-light-gradient": {
          "background-image":
            "linear-gradient(to bottom right, #585c5f, #32383a )",
        },
        ".bg-light-gradient-2": {
          "background-image":
            "linear-gradient(to bottom right, #7d8083, #595e60)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;

export default config;
