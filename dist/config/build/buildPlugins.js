import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins(_a) {
    var mode = _a.mode, paths = _a.paths, analyzer = _a.analyzer, platform = _a.platform;
    var isDev = mode === 'development';
    var isProd = mode === 'production';
    var plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
            __ENV__: JSON.stringify(mode),
        })
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin()); //показывает в процентах насколько прошла сборка (помни что в больших проектах он может замедлять сборку и посему их тоже можно исключать используя наш маркер isDev))
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
}
