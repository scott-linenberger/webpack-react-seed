module.exports = (options) => {
  const mode =
    options
    && options.data
    && options.data.root
    && options.data.root.webpackConfig
    && options.data.root.webpackConfig.mode;

  if (mode === 'development') {
    return options.fn(options.data.root);
  }

  return '';
};
