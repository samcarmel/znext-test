module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@simbathesailor/babel-plugin-use-what-changed',
      {
        active: process.env.NODE_ENV === 'development', // boolean
      },
    ],
  ],
}