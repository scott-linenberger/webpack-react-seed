/* webpack rule for js files */

/* loaders */
const loaderBabel = require('../loaders/loader.babel');
const loaderEslint = require('../loaders/loader.eslint');

module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    loaderBabel,
    loaderEslint,
  ],
};
