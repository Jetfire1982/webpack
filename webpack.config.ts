// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from  'webpack';
import type {Configuration as DevServerCnfiguration} from 'webpack-dev-server'

type Mode = 'production' | 'development';

interface EnvVariables {
  mode: Mode,
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), //путь до входного файла, до точки входа в наше приложение
    output: { //тут задаем куда происходить сборка
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js', //для filename можно использовать шаблоны чтобы избежать проблем кеширования в браузере
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), //подставляет скрипты которые получаются в результате сборки в нашу html-ку
      new webpack.ProgressPlugin() //показывает в процентах насколько прошла сборка (помни что в больших проектах он может замедлять сборку и посему их тоже можно исключать используя наш маркер isDev)
    ],
    module: {
      rules: [ //тут у нас лоудеры которые както обрабатывают файлы с разными расширениями
      //порядок имеет значение
         {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
         },
        {
          //Важно!: ts-loader умеет работать с JSX. Если б мы не использовали тайпскрипт то пришлось бы подключать и настраивать babel-loader
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'], //тут расширения файлов с исходным кодом
    },
    devtool: isDev && 'inline-source-map', //делаем source map 
    devServer: isDev ? {  //настраиваем devServer
      port: env.port ?? 3000,
      open: true
    }:undefined

  }

  return config;
}


