/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeout: {
          '75%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        toast: 'fadeout 4s'
      },
      colors: {
        danger: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c',
          ring: '#f87171'
        },
        success: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          ring: '#4ade80'
        },
        warning: {
          DEFAULT: '#facc15',
          hover: '#eab308',
          ring: '#fde047'
        },

        light: {
          gray: '#f3f4f6',
          main: '#f8f8f8',
          sub: '#ffffff',
          point: {
            DEFAULT: '#60d4de',
            hover: '#3fb7c1',
            ring: '#70e3ed'
          }
        },
        dark: {
          gray: '#93a3af',
          main: '#1f2544',
          sub: '#121837',
          point: {
            DEFAULT: '#f9bd7d',
            hover: '#f0aa60',
            ring: '#ffc588'
          }
        },
        white: '#fff',
        disabled: '#93a3af',
        info: '#F9BD7D',
        confirm: '#10B981',
        bronze: '#854d0e'
      },
      fontFamily: {
        'IMHyemin-bold': ['IM_Hyemin-Bold'],
        'IMHyemin-regular': ['IM_Hyemin-Regular']
      }
    }
  }
};
