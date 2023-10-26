/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 기존 테일윈드에 커스텀을 추가하려면 여기에!
      colors: {
        red: '#dc2626',
        green: '#10b981',
        light: {
          gray: '#d1d5db',
          main: '#f8f8f8',
          sub: '#ffffff',
          point: '#60d4de'
        },
        dark: {
          gray: '#93a3af',
          main: '#1f2544',
          sub: '#121837',
          point: '#f98d7d'
        }
      },
      fontFamily: {
        'IMHyemin-bold': ['IM_Hyemin-Bold'],
        'IMHyemin-regular': ['IM_Hyemin-Regular']
      }
    }
  }
};
