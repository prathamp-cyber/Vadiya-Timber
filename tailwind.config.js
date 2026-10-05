/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FFFFFF',
          secondary: '#FAF8F5',
        },
        'green-deep': '#2F4A2B',
        'green-sage': '#4F6B47',
        'brown-walnut': '#4A2E1A',
        'brown-tan': '#7A5738',
        'text-dark': '#2B2B2B',
        'text-muted': '#6B6B6B',
        green: {
          deep: '#2F4A2B',
          sage: '#4F6B47',
        },
        brown: {
          walnut: '#4A2E1A',
          tan: '#7A5738',
        },
        text: {
          dark: '#2B2B2B',
          muted: '#545454',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Fraunces', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        'xl': '12px',
      }
    },
  },
  plugins: [],
}
