const pathModule = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: pathModule.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  performance: { hints: false }
};
