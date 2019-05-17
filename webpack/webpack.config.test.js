const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const configCommon = require('./webpack.config.common');
const webpackSettings = require('./webpack.config.settings');

/* items from settings */
const {
  paths: {
    pathOutput,
  },
  filenames: {
    nameTestBundle: filenameBundle,
  },
} = webpackSettings;

const configTest = {
  /* add source maps for development */
  target: 'node',
  devtool: 'source-map',
  mode: 'development',
  output: {
    path: pathOutput,
    filename: filenameBundle,
  },
};

module.exports = webpackMerge(
  configCommon,
  configTest,
);
