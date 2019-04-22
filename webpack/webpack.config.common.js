// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const webpackSettings = require('./webpack.config.settings');

/* rules */
const ruleJavascript = require('./rules/rule.javascript');
const ruleHandlebars = require('./rules/rule.handlebars');

/* plugins */
const pluginHandlebars = require('./plugins/plugin.handlebars');

/* items from settings */
const {
  paths: {
    pathEntryPoint,
    pathOutput,
  },
  filenames: {
    nameBundle: filenameBundle,
  },
} = webpackSettings;

const common = {
  entry: pathEntryPoint,
  output: {
    path: pathOutput,
    filename: filenameBundle,
  },
  module: {
    rules: [
      ruleJavascript,
      ruleHandlebars,
    ],
  },
  plugins: [
    pluginHandlebars,
  ],
};

module.exports = common;
