const webpackSettings = require('../webpack.config.settings');

const {
  paths: {
    pathHandlebarsPartials: pathPartials,
    pathHandlebarsHelpers: pathHelpers,
  },
} = webpackSettings;

module.exports = {
  test: /\.handlebars$/,
  loader: 'handlebars-loader',
  query: {
    partialDirs: [
      pathPartials,
    ],
    /* for more helpers info https://github.com/pcardune/handlebars-loader/blob/master/examples/helperDirs/book-listing.handlebars */
    helperDirs: [
      pathHelpers,
    ],
  },
};
