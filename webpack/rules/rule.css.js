
module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        camelCase: true,
        localIdentName: '[name]--[hash:base64:5]',
      },
    },
  ],
};
