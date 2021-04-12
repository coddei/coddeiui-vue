const pkg = require("../package.json")
const webpack = require("webpack")

const WebpackBar = require("webpackbar");
const { VueLoaderPlugin } = require("vue-loader")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


module.exports = {
    mode: "production",
    stats: "errors-only",
    externals: {
        vue: {
            amd: "vue",
            root: "vue",
            commonjs: "vue",
            commonjs2: "vue",
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        ts: "babel-loader"
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                {
                    loader: "sass-loader",
                    options: {
                    implementation: require("sass"),
                        sassOptions: {
                            indentedSyntax: true,
                            outputStyle: "expanded"
                        },
                    },
                }
                ]
            }
        ],
    },
    plugins: [
        new WebpackBar(),
        new webpack.BannerPlugin({
            banner: `/*!
                * CoddeiUI v${pkg.version}
                * Made by Pedro Borges and Marcosuel Vieira
                * © 2021, Coddei. (https://coddei.com)
                */`,
            raw: true,
            entryOnly: true
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: [ ".tsx", ".ts", ".js", ".sass" ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                include: /(min|index)\.js$/,
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /(min|style)\.css$/g,
                cssProcessor: require("cssnano"),
            })
        ]
    }
}
