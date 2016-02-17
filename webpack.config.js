var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ],
  },
  output: {
      publicPath: '/assets',
      filename: 'bundle.js'
  },
};
