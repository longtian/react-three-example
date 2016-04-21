const path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'entry.js'),
    demo: path.join(__dirname, 'src', 'demo.js'),
  },
  output: {
    filename: '[name].js',
    path: 'dist'
  },
  module: {
    loaders: [
      {
        test: /\.(es6|js|jsx)$/,
        loader: 'babel'
      }
    ]
  }
}

