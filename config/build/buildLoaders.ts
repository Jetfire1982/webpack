import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript"

export  function buildLoaders(options: BuildOptions): ModuleOptions['rules']{

  const isDev = options.mode === 'development'

  const  assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  // const svgrLoader = {
  //   test: /\.svg$/i,
  //   use: [
  //     {
  //       loader: '@svgr/webpack',
  //       options: {
  //        icon: true,
  //        svgoConfig: {
  //         plugins: [
  //           {
  //             name: 'convertColors',
  //             params: {
  //               currentColor: true,
  //             }
  //           }
  //         ]
  //        }
  //       } 
  //     }
  //   ]
  // }

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
         icon: true,
        } 
      }
    ]
  }

  

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


  //  const tsLoader =  {
  //   //Важно!: ts-loader умеет работать с JSX. Если б мы не использовали тайпскрипт то пришлось бы подключать и настраивать babel-loader
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }

  //в этом варианте tsLoader мы при сборке не делаем проверку на типы для скорости благодаря флагу transpileOnly
  const tsLoader =  {
    //Важно!: ts-loader умеет работать с JSX. Если б мы не использовали тайпскрипт то пришлось бы подключать и настраивать babel-loader
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use:[
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,      // если стоит true то на типы не проверяем и ускоряем сборку проекта
          getCustomTransformers: ()=>({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ]
  }

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env', 
          '@babel/preset-typescript', 
          [
            '@babel/preset-react',
            {
              runtime: isDev ? 'automatic' : 'classic'
            }
          ]]
      }
    }
  }



    return   [ 
           assetLoader,
           scssLoader,
          //  tsLoader,
          babelLoader,
           svgrLoader 
        ]
}