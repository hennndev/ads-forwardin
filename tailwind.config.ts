import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3366FF",
        "secondary": "#000"
      },
      backgroundColor: {
        "section-primary": "#ECF2FA",
        "section-secondary": "#FFF",
        "gradient-pricing": "radial-gradient(44.66% 44.66% at 50% 55.34%, #FFFFFF 0%, #ECF2FA 0.01%, rgba(255, 255, 255, 0) 100%)"
      },
      backgroundImage: {
        "hero-bg-image": "url(/images/main-bg.png)",
        "footer-bg-image": "url(/images/main-bg-footer.png)"
      },
      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"]
      },
      boxShadow: {
        'pricing-card': '0px 17.73px 42.21px 0px #00000014'
      }
    },
  },
  plugins: [],
};
export default config;
