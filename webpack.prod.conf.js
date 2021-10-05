const { merge } = require('webpack-merge');
const common = require('./webpack.common.conf.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');  

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: `[name].[contenthash].js`,
      path: path.join(__dirname, '/public'),
   },
   plugins:[  
      new BundleAnalyzerPlugin(),
   ],
   optimization: {
      splitChunks: {
          chunks: 'all'
      },
      minimizer: [
          new TerserPlugin({
              extractComments: false,
          }),
          new CssMinimizerPlugin({
            cache: true,
        }),
      ]
  },  
});

