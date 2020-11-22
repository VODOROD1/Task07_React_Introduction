const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBrowserPlugin = require('webpack-browser-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: '../src/index.js',
  // entry: {
  //   app: '../src/index.js',
  //   modules: ["../src/components/App.js","../src/Todo/TodoItem.js","../src/Todo/TodoList.js"]
  // },
  output: {
    filename: 'index-bundle.js',
    path: path.join(__dirname, '/dist'),
    // publicPath: '/dist'
  },
  // output: {
  //   filename: '[name].[contenthash].js',
  //   // filename: "index_bundle.js",
  //   // path: path.resolve(__dirname, 'dist')
  //   path: path.join(__dirname, 'dist')
    
  // },
  resolve: {
    extensions: ['html', '.js', '.jsx', 'json', 'png'],
    
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 4200,
    open: 'google chrome'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, 'src/favicon.ico'),
    //     to: path.resolve(__dirname, 'dist')
    //   }
    // ]),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    // new WebpackBrowserPlugin({
    //   browser: 'Google Chrome',
    //   port: 4200,
    //   url: 'http://127.0.0.1'
    // })
  ],
  module: {
    // loaders: [{
    //     test: /\.jsx?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel',
    //     query: {
    //       presets: ['es2015', 'react']
    //     }
    //   }],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          }, 
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use:['csv-loader']
      }
    ]
  }
}