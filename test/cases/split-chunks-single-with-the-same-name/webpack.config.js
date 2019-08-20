import Self from '../../../src';

module.exports = {
  entry: {
    index: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [Self.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'index',
          chunks: 'all',
          test: /\.css$/,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new Self({
      filename: '[name].css',
    }),
  ],
};
