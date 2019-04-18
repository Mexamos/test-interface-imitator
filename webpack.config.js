const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = env => {
  return {
    mode: 'development',
    entry: {
      app: './src'
    },
    output: {
      filename: 'index_bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      new webpack.DefinePlugin({
        ENV: JSON.stringify(env)
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 10000
              } 
          }]
      },
        {
          test: /\.(html)$/,
          use: {
            loader: "underscore-template-loader"
          }
        }
      ]
    },
  }
};