import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from  'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type {Configuration as DevServerCnfiguration} from 'webpack-dev-server'   
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {

    const {mode, paths} = options
    const isDev = mode === 'development'


    return {
        mode: mode ?? 'development',
        entry: paths.entry, //путь до входного файла, до точки входа в наше приложение
        output: { //тут задаем куда происходить сборка
          path: paths.output,
          filename: '[name].[contenthash].js', //для filename можно использовать шаблоны чтобы избежать проблем кеширования в браузере
          clean: true
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map', //делаем source map 
        devServer: isDev ? buildDevServer(options) :undefined
    }
}