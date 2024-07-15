import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    };
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
    var svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                }
            }
        ]
    };
    var cssLoaderWthModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWthModules,
            "sass-loader"
        ]
    };
    //  const tsLoader =  {
    //   //Важно!: ts-loader умеет работать с JSX. Если б мы не использовали тайпскрипт то пришлось бы подключать и настраивать babel-loader
    //   test: /\.tsx?$/,
    //   use: 'ts-loader',
    //   exclude: /node_modules/,
    // }
    //в этом варианте tsLoader мы при сборке не делаем проверку на типы для скорости благодаря флагу transpileOnly
    var tsLoader = {
        //Важно!: ts-loader умеет работать с JSX. Если б мы не использовали тайпскрипт то пришлось бы подключать и настраивать babel-loader
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    };
    return [
        assetLoader,
        scssLoader,
        tsLoader,
        svgrLoader
    ];
}
