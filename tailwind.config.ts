import type { Config } from 'tailwindcss';

const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
  darkMde: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          200: 'rgba(17, 25, 40, 0.75)',
          300: 'rgba(255, 255, 255, 0.125)',
        },
        white: {
          DEFAULT: '#fff',
          100: '#BEC1DD',
          200: '#C1C2D3',
        },
        prime: {
          '100': '#E0F5FF', // rgb(224, 245, 255)
          '200': '#BEEAFF', // rgb(190, 234, 255)
          '300': '#99E0FF', // rgb(153, 224, 255)
          '400': '#6DD6FF', // rgb(109, 214, 255)
          '500': '#1FCBFF', // rgb(31, 203, 255)
          '600': '#279FC6', // rgb(39, 159, 198)
          '700': '#267591', // rgb(38, 117, 145)
          '800': '#214D5E', // rgb(33, 77, 94)
          '900': '#172930', // rgb(23, 41, 48)
        },
        seco: {
          '100': '#FFDFD0', // rgb(255, 223, 208)
          '200': '#FFBFA3', // rgb(255, 191, 163)
          '300': '#FF9E77', // rgb(255, 158, 119)
          '400': '#FF7B4C', // rgb(255, 123, 76)
          '500': '#FF531F', // rgb(255, 83, 31)
          '600': '#C7441C', // rgb(199, 68, 28)
          '700': '#933618', // rgb(147, 54, 24)
          '800': '#612714', // rgb(97, 39, 20)
          '900': '#33180D', // rgb(51, 24, 13)
        },
        green: {
          '100': '#D8F1EB',
          '200': '#B1E2D7',
          '300': '#8AD4C3',
          '400': '#62C6AE',
          '500': '#3BB79A',
          '600': '#14A986',
          '700': '#10876B',
          '800': '#0C6550',
          '900': '#084436',
          '1k': '#04221B',
        },
        royal: {
          '100': '#D8DEF1',
          '200': '#B1BCE2',
          '300': '#8A9BD4',
          '400': '#627AC6',
          '500': '#3B58B7',
          '600': '#1437A9',
          '700': '#102C87',
          '800': '#0C2165',
          '900': '#081644',
          '1k': '#040B22',
        },
        scarlet: {
          '100': '#F1D8DE',
          '200': '#E2B1BC',
          '300': '#D48A9B',
          '400': '#C6627A',
          '500': '#B73B58',
          '600': '#A91437',
          '700': '#87102C',
          '800': '#650C21',
          '900': '#440816',
          '1k': '#22040B',
        },
        gold: {
          '100': '#F1EBD8',
          '200': '#E2D7B1',
          '300': '#D4C38A',
          '400': '#C6AE62',
          '500': '#B79A3B',
          '600': '#A98614',
          '700': '#876B10',
          '800': '#65500C',
          '900': '#443608',
          '1k': '#221B04',
        },
        blue: {
          '100': '#E4ECFF',
        },
        purple: '#CBACF9',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        shimmer: 'shimmer 2s linear infinite',
        first: 'moveVertical 10s ease infinite',
        second: 'moveInCircle 10s reverse infinite',
        third: 'moveInCircle 10s linear infinite',
        fourth: 'moveHorizontal 10s ease infinite',
        fifth: 'moveInCircle 10s ease infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      textShadow: {
        white: '0 0 20px rgba(190, 234, 255, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // require('tailwindcss-textshadow'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
