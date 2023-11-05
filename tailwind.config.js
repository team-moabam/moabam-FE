/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
          gray: '#d1d5db',
          main: '#f8f8f8',
          sub: '#ffffff',
          point: {
            DEFAULT: '#60d4de',
            hover: '#3fb7c1',
            ring: '#70e3ed'
          }
        },
        dark: {
          gray: '#9ca3af',
          main: '#1f2544',
          sub: '#121837',
          point: {
            DEFAULT: '#f9bd7d',
            hover: '#f0aa60',
            ring: '#ffc588'
          }
        },
        disabled: '#93a3af',
        info: '#F9BD7D',
        confirm: '#10B981',
        bronze: '#854d0e'
      },
      fontFamily: {
        'IMHyemin-bold': ['IM_Hyemin-Bold'],
        'IMHyemin-regular': ['IM_Hyemin-Regular']
      },
      boxShadow: {
        nav: '0px -1px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px'
      }
    }
  }
};
