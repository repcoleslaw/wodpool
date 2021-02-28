/* eslint-disable import/no-extraneous-dependencies */

const babelOptions = {
  plugins: ['@babel/plugin-proposal-export-default-from'],
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(
  babelOptions,
);
