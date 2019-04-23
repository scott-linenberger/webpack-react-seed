// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const webpackSettings = require('./webpack.config.settings');

/* rules */
const ruleJavascript = require('./rules/rule.javascript');
const ruleHandlebars = require('./rules/rule.handlebars');
const ruleCss = require('./rules/rule.css');

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
      ruleCss,
    ],
  },
  plugins: [
    pluginHandlebars,
  ],
};

module.exports = common;
