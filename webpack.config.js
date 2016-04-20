const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'entry.js'),
  output: {
    filename: 'bundle.js'
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

