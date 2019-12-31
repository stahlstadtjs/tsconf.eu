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
      'light-gray': '#f3f4f8'
    },
    inset: {
      '0': 0,
      'auto': 'auto',
      '1/2': '50%',
    }
  },
  corePlugins: {
    fontFamily: false
  },
  variants: {},
  plugins: []
}
