import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: '.tmp/assets/main.js',
  output: {
    file: 'dist/assets/main.js',
    format: 'iife',
    name: 'main',
    strict: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    minify({
      comments: false,
    }),
  ]
};
