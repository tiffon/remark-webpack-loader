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
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: path.resolve('../../dist/cjs.js'),
            options: {
              preset: 'xtend',
              'remark-generic-extensions': {
                elements: {
                  alert: {
                    html: {
                      tagName: 'span',
                      children: [
                        {
                          type: 'element',
                          tagName: 'i',
                          properties: {
                            className: 'fa fa-exclamation',
                            ariaHidden: true,
                          },
                        },
                        {
                          type: 'element',
                          tagName: 'span',
                          children: [
                            {
                              type: 'text',
                              value: '::content::',
                            },
                          ],
                        },
                        {
                          type: 'element',
                          tagName: 'span',
                          properties: {
                            className: 'subtext',
                          },
                          children: [
                            {
                              type: 'text',
                              value: '::argument::',
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  // devtool: '#eval-source-map',
};
