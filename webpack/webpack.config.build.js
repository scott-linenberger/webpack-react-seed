const webpackMerge = require('webpack-merge');
const configCommon = require('./webpack.config.common');

const configBuild = {
  mode: 'production',
};

module.exports = webpackMerge(
  configCommon,
  configBuild,
);
