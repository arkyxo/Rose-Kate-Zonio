/**
 * Palette (from the chosen swatch):
 *   sunlit  #D9D28B   -> main accent (red-400)
 *   leaf    #B2BD7E   -> secondary accent (amber-400)
 *   olive   #8E9162   -> tertiary (blue-400)
 *   sage    #6A795D   -> deep green
 * Existing Tailwind scales (red / amber / blue / slate / neutral) are remapped
 * onto this palette so every component picks up the new look automatically.
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: ["hover:text-red-400", "hover:text-red-600", "hover:text-slate-400", "hover:text-slate-600"],
  theme: {
    extend: {
      colors: {
        black: "#141910",
        paper: "#FCFBF2",
        // accent
        red: {
          50: "#FAF9EC", 100: "#F2F0D0", 200: "#EBE8B0", 300: "#E4DF9E", 400: "#D9D28B",
          500: "#B2BD7E", 600: "#5F6E50", 700: "#4D5A41", 800: "#3B4632", 900: "#2B3424", 950: "#1A2016",
        },
        amber: {
          50: "#F6F8EA", 100: "#ECF0D5", 200: "#DDE4B5", 300: "#C9D29E", 400: "#B2BD7E",
          500: "#7F8E4F", 600: "#66733F", 700: "#515C33", 800: "#3F4829", 900: "#2F3620", 950: "#1B2012",
        },
        blue: {
          50: "#F4F4EC", 100: "#E7E8D8", 200: "#D2D4B9", 300: "#B5B88F", 400: "#8E9162",
          500: "#767A52", 600: "#5F6342", 700: "#4C4F36", 800: "#3A3D2B", 900: "#2B2D20", 950: "#1B1D14",
        },
        // light-mode neutrals (warm cream -> deep green-black)
        slate: {
          50: "#F7F5E4", 100: "#EDEACF", 200: "#DCD9B4", 300: "#C4C79B", 400: "#878C6F",
          500: "#6F7660", 600: "#565F48", 700: "#434B38", 800: "#313828", 900: "#222819", 950: "#151A10",
        },
        // dark-mode neutrals (green-tinted)
        neutral: {
          50: "#F7F6EA", 100: "#EEEDDC", 200: "#DAD9C4", 300: "#C0C2A8", 400: "#A3A78A",
          500: "#7F846A", 600: "#5E6550", 700: "#444B3A", 800: "#2D3326", 900: "#1E241A", 950: "#141910",
        },
      },
    },
  },
  plugins: [],
};
