/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#1a1a2e',
        'text-secondary': '#4a4a6a',
        'accent-blue': '#667eea',
        'accent-purple': '#764ba2',
        'accent-pink': '#f093fb',
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'float1': 'float1 20s ease-in-out infinite',
        'float2': 'float2 18s ease-in-out infinite',
        'float3': 'float3 25s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(100px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-50px, 100px) scale(0.9)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-80px, -100px) scale(1.15)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(calc(-50% + 150px), calc(-50% - 100px)) scale(1.2)' },
          '50%': { transform: 'translate(calc(-50% - 100px), calc(-50% + 80px)) scale(0.85)' },
          '75%': { transform: 'translate(calc(-50% + 80px), calc(-50% + 120px)) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
