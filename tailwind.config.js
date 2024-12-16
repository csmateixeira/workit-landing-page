/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'green': '#44FFA1',
        'purple-900': '#24053E',
        'purple-500': '#584D62',
        'purple-100': '#FCF8FF',
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      fontSize: {
        // mobile presets
        'sm-preset1': ['48px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'sm-preset2': ['32px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'sm-preset3': ['24px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'sm-preset4': ['16px', {
          lineHeight: '180%',
          letterSpacing: '0px',
        }],
        'sm-preset5': ['20px', {
          lineHeight: '40px',
          letterSpacing: '0px',
        }],

        // tablet presets
        'md-preset1': ['60px', {
          lineHeight: '100%',
          letterSpacing: '0px',
        }],
        'md-preset2': ['48px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'md-preset3': ['28px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'md-preset4': ['16px', {
          lineHeight: '180%',
          letterSpacing: '0px',
        }],

        // desktop presets
        'preset1': ['80px', {
          lineHeight: '100%',
          letterSpacing: '0px',
        }],
        'preset2': ['56px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'preset3': ['32px', {
          lineHeight: '120%',
          letterSpacing: '0px',
        }],
        'preset4': ['18px', {
          lineHeight: '180%',
          letterSpacing: '0px',
        }],
      }
    },
  },
  plugins: [],
}

