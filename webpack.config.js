var path = require('path');

module.exports = {
  context:path.join( __dirname, '/src'),
  entry: 'main.ts',
  
  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [path.join(__dirname, "/src")],
    extensions: ['','.webpack.js','.ts', '.js']
  },

  module: {
    loaders: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader' }
    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    inline: true
  }
};
