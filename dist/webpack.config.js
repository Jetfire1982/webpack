// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
export default (function (env) {
    var _a, _b, _c, _d;
    var paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 3000,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : 'development',
        paths: paths,
        analyzer: (_c = env.analyzer) !== null && _c !== void 0 ? _c : false,
        platform: (_d = env.platform) !== null && _d !== void 0 ? _d : 'desktop',
    });
    return config;
});
