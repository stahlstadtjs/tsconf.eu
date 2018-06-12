import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: '.tmp/main.js',
  output: {
    file: 'assets/main.js',
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
