const { merge } = require("webpack-merge")

const path = require("path")
const baseConfig = require("../webpack.base.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var Components = require("./components.json");


module.exports = merge(baseConfig, {
    entry: Components,
    output: {
        filename: "[name]/index.js",
        path: path.resolve(process.cwd(), "dist"),
        publicPath: "/dist/",
        library: "[name]",
        libraryTarget: "umd",
        libraryExport: "default",
        globalObject: "typeof self !== \"undefined\" ? self : this"
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name]/style.css",
        })
    ]
})
