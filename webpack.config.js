module.exports = {
  entry: __dirname + '/client/src/Index.jsx',
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            {loader: "style-loader"},
            {loader: "css-loader"}
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};