import type { Config } from 'tailwindcss'

function generateColorShades(
  colorName: string,
  numOfShades: number,
): { [key: number]: string } {
  const shades: { [key: number]: string } = {}
  for (let i = 0; i < numOfShades; i++) {
    shades[i] = `var(--${colorName}---${colorName}-${i})`
  }
  return shades
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: generateColorShades('gray', 10),
        red: generateColorShades('red', 10),
        pink: generateColorShades('pink', 10),
        grape: generateColorShades('grape', 10),
        violet: generateColorShades('violet', 10),
        indigo: generateColorShades('indigo', 10),
        blue: generateColorShades('blue', 10),
        cyan: generateColorShades('cyan', 10),
        teal: generateColorShades('teal', 10),
        green: generateColorShades('green', 10),
        lime: generateColorShades('lime', 10),
        yellow: generateColorShades('yellow', 10),
        orange: generateColorShades('orange', 10),
        dialog: 'var(--dialog-overlay)',
      },
      keyframes: {
        overlayShow: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        loaderDots1: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        loaderDots2: {
          '0%': {
            transform: 'translate(0,0)',
          },
          '100%': {
            transform: 'translate(24px,0)',
          },
        },
        loaderDots3: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        },
      },
      // Dropdown menu
      'scale-in': {
        '0%': { opacity: 0, transform: 'scale(0)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
      'slide-down': {
        '0%': { opacity: 0, transform: 'translateY(-10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      'slide-up': {
        '0%': { opacity: 0, transform: 'translateY(10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      animation: {
        // loading modal
        overlay: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        content: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        loaderDot1: 'loaderDot1 0.6s infinite',
        loaderDot2: 'loaderDot2 0.6s infinite',
        loaderDot3: 'loaderDot3 0.6s infinite',
        // Dropdown menu
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-radix')],
}
export default config
