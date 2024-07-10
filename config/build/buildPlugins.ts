import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/types";


export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins']{
    const isDev = mode === 'development';
    const isProd = mode === 'production';


    const plugins: Configuration['plugins'] = [
      new HtmlWebpackPlugin({ template: paths.html}), //подставляет скрипты которые получаются в результате сборки в нашу html-ку 
      new DefinePlugin({                 
        __PLATFORM__: JSON.stringify(platform),
        __ENV__: JSON.stringify(mode), 
      })
    ]

    if(isDev){
      plugins.push(new webpack.ProgressPlugin()) //показывает в процентах насколько прошла сборка (помни что в больших проектах он может замедлять сборку и посему их тоже можно исключать используя наш маркер isDev))
    }

    if(isProd){
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        })
      )
    }

    if(analyzer){
      plugins.push(new BundleAnalyzerPlugin())
    }



    return plugins;
}