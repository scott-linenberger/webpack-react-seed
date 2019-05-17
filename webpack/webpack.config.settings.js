const path = require('path');
const siteConfig = require('../site-config.json');

const paths = {
  pathEntryPoint: path.join(
    __dirname,
    '..',
    'src',
    'index.js',
  ),
  pathOutput: path.join(
    __dirname,
    '..',
    'dist',
  ),
  pathHtmlTemplate: path.join(
    __dirname,
    '..',
    'handlebars',
    'index.handlebars',
  ),
  pathHandlebarsPartials: path.join(
    __dirname,
    '..',
    'handlebars',
    'partials',
  ),
  pathHandlebarsHelpers: path.join(
    __dirname,
    '..',
    'handlebars',
    'helpers',
  ),
};

const filenames = {
  nameBundle: '[hash].js',
  nameTestBundle: 'test-bundle.js',
};

const serverDevelopment = {
  port: 8080,
};

module.exports = {
  paths,
  filenames,
  serverDevelopment,
  siteConfig,
};
