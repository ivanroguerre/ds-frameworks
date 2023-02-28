import * as webpack from 'webpack';
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env['NODE_ENV'] !== "production";


export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  // do your config modifications here
  if (config.module?.rules) {
    config.module.rules.push(
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    )
  }
  if (config?.plugins) {
    config.plugins.push(new MiniCssExtractPlugin())
  }
  return config;
}