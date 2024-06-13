import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export  function buildLoaders(options: BuildOptions): ModuleOptions['rules']{

  const isDev = options.mode === 'development'

  const cssLoaderWthModules = {
    loader: 'css-loader',
    options: {
      modules: {
      localIdentName: isDev ? '[path][name]__[local]':'[hash:base64:8]'
      },
    },
  }

  const scssLoader =  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader': MiniCssExtractPlugin.loader, 
      cssLoaderWthModules, 
      "sass-loader"]
   }


   const tsLoader =  {
    //Важно!: ts-loader умеет работать с JSX. Если б мы не использовали тайпскрипт то пришлось бы подключать и настраивать babel-loader
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }



    return   [ 
           scssLoader,
           tsLoader 
        ]
}