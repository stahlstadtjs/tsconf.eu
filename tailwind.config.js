/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: '#000',
      white: '#fff',
      blue: '#133179',
      red: '#fe272d',
      'light-gray': '#f3f4f8',
      'dark-gray': '#d8d8d8'
    },
    inset: {
      '0': 0,
      'auto': 'auto',
      '1/2': '50%',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '100': '100px',
    }
  },
  corePlugins: {
    fontFamily: false
  },
  variants: {},
  plugins: []
}
