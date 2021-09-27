/* eslint-disable no-undef */
const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  
console.log(process.env.NODE_ENV);
module.exports = {  
   entry: './src/index.js',  
   output: {  
      path: path.join(__dirname, '/public'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
    port: 4200,
    historyApiFallback: true,
    hot: true,
    compress: true,
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
            use: ['babel-loader', 'eslint-loader']
         },
         {
            test: /\.(css)$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '',
                    },
                },
                'css-loader'
            ],
        }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './public/index.html'  
      }),
      new MiniCssExtractPlugin() 
   ]  
}  