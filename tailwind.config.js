/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        danger: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c'
        },
        success: '#22c55e',
        bronze: '##854d0e',
        warning: '#facc15',
        light: {
          gray: '#d1d5db',
          main: '#f8f8f8',
          sub: '#ffffff',
          point: {
            DEFAULT: '#60d4de',
            hover: '#3FB7C1'
          }
        },
        dark: {
          gray: '#93a3af',
          main: '#1f2544',
          sub: '#121837',
          point: {
            DEFAULT: '#F9BD7D',
            hover: '#F0AA60'
          }
        }
      },
      fontFamily: {
        'IMHyemin-bold': ['IM_Hyemin-Bold'],
        'IMHyemin-regular': ['IM_Hyemin-Regular']
      }
    }
  }
};
