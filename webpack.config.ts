// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from  'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type {Configuration as DevServerCnfiguration} from 'webpack-dev-server'
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from './config/build/types/types';



interface EnvVariables {
  mode: BuildMode,
  port: number,
  analyzer?: boolean
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer
  })

  return config;
}


