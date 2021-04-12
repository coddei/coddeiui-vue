const { merge } = require("webpack-merge")

const path = require("path")
const baseConfig = require("../webpack.base.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(baseConfig, {
    entry: {
        "base": "./src/styles/index.ts",
        "base.min": "./src/styles/index.ts",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(process.cwd(), "dist"),
        publicPath: "/dist/",
        library: "CoddeiUI",
        libraryTarget: "umd",
        libraryExport: "default",
        umdNamedDefine: true,
        globalObject: "typeof self !== \"undefined\" ? self : this"
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
})
