import type { Config } from 'tailwindcss'

const mono = [
  'ui-monospace',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
];

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors: {
        'regal-purple': '#322b43',
        'transparent': 'transparent',
        'default-bkg': '#e1f5f5',
        'default-color-gray': '#171717',
        'default-color-gray-1': '	#fcfcfc',
        'default-color-gray-light': '	#ededed',
        'default-gray-dark': '#353535',
        'transparent-white': 'rgba(255, 255, 255, 0.08)',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue': 'radial-gradient(at 60% 60%, #a4c5ec, #0000), radial-gradient(at 40% 40%, #74519c, #0000)',
        'gradient-gotham': 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
        "texture": "url(/glow-texture.png), radial-gradient(var(--color-primary), transparent 70%)",
        "glass-gradient": "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "hero-gradient": "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        "hero-glow": "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "glow-lines": "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        }, 
        "image-glow": {
          "0%": {
            opacity: "0",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "10%": {
            opacity: "1",
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "100%": {
            "opacity": "0.2",
          },
        },
        "sketch-lines": {
        "0%": { "stroke-dashoffset": "1" },
        "50%": { "stroke-dashoffset": "0" },
        "99%": { "stroke-dashoffset": "0" },
        "100%": { visiblity: "hidden"},
      },
      "glow-line-horizontal": {
        "0%": { opacity: "0", transform: "translateX(0)" },
        "5%": { opacity: "1", transform: "translateX(0)" },
        "90%": { opacity: "1" },
        "100%": { opacity: "0", transform: "translateX(min(60vw, 45rem))" },
      },
      "glow-line-vertical": {
        "0%": { opacity: "0", transform: "translateY(0)" },
        "5%": { opacity: "1", transform: "translateY(0)" },
        "90%": { opacity: "1" },
        },
      },
    },
    zap: {
    "0%": { fill: "transparent"},
    "9%": { fill: "transparent"},
    "11%": { fill: "transparent"},
    "100%": { fill: "transparent"},
    },
    bounce: {
      "50%": {
        transform: "scale(0.98",
      },
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      "glow-line-horizontal": "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical": "glow-line-vertical var(--animation-duration) ease-in forwards",
       zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
      bounce: "240ms ease 0s 1 running bounce",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
export default config
