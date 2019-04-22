const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const configCommon = require('./webpack.config.common');
const webpackSettings = require('./webpack.config.settings');

const {
  serverDevelopment: {
    port,
  },
} = webpackSettings;

const configDevelopment = {
  /* add source maps for development */
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    port,
    hot: true,
    compress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = webpackMerge(
  configCommon,
  configDevelopment,
);
