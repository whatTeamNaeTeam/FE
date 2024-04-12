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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
