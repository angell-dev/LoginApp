/* eslint-disable no-sparse-arrays */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@pages': './src/screens',
          '@components': '.src/components',
          test: './test',
        },
      },
    ],
    ,
  ],
};
