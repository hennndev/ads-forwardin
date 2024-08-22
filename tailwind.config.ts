/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3366FF",
        "secondary": "#000",
        "light-gray": "#FAFBFF"
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
        'pricing-card': '0px 17.73px 42.21px 0px #00000014',
        'navbar': '0px 21px 50px 0px #0000000A',
        'pricing-toggle': '0px 21px 50px 0px #00000014'
      }
    },
  },
};
export default config;
