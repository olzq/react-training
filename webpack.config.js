const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
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
        use: {  
              loader: "babel-loader",  
            }  
         }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './public/index.html'  
      })  
   ]  
}  