module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bloodhound.min.js',
    library: 'Bloodhound'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      }
    ]
  },
  devtool: "source-map"
};
