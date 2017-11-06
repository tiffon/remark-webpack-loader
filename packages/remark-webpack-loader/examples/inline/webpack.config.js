const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../dist'),
    ],
  },
  // devtool: '#eval-source-map',
};
