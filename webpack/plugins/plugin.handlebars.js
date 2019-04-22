const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackSettings = require('../webpack.config.settings');

const {
  paths: {
    pathHtmlTemplate,
  },
  siteConfig,
} = webpackSettings;

const pluginHtml = new HtmlWebpackPlugin({
  template: pathHtmlTemplate,
  data: siteConfig,
});

module.exports = pluginHtml;
