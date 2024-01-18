import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            azure: "#F0FFFF",
            mainBlue: "#00B0FF"
        },
        backgroundImage: {
            "wallpaper1": "url('/wallpapers/lowpolygrid.svg')",
            "wallpaper2": "url('/wallpapers/stackedwaves.svg')",
        }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
