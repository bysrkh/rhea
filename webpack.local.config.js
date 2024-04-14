'use strict';

var path = require('path');

var { DefinePlugin } = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var dotenv = require('dotenv');

var fileEnv = dotenv.config({ path:  path.resolve(__dirname, ".env.local")}).parsed;

console.log("project is starting building bundlers in mode: " + process.env.NODE_ENV)

module.exports = {
    mode: 'development',
    entry:
        {
            index: [
                path.resolve(__dirname, "src", "index.tsx"),
                path.resolve(__dirname, "src", "asset", "bootstrap.tsx")
            ]
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[id].entry.[contenthash:8].js",
        chunkFilename: "[id].chunk.[contenthash:8].js",
        crossOriginLoading: "anonymous"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    devtool: "cheap-module-source-map",
    devServer: {
        port: "80",
        static: {
            directory: path.join(__dirname, "dist")
        },
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            import: true,
                            importLoaders: 5
                        },
                    }, "postcss-loader", "sass-loader"
                ],
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            "process.env": JSON.stringify(fileEnv)
        }),
        new MiniCssExtractPlugin({
            linkType: "text/css",
            filename: '[id].entry.[contenthash:8].css',
            chunkFilename: "[id].chunk.[contenthash:8].css"
        }),
        new HtmlWebpackPlugin({
            title: "Rhea in Development Mode",
            template: path.resolve(__dirname, "src", "index.html"),
            inject: "body",
            //     cdn: [{
            //         href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
            //         rel: "stylesheet",
            //         integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
            //         type: "text/css"
            //     }, {
            //         href: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
            //         integrity: "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
            //         type: "application/javascript"
            //     }, {
            //         href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js",
            //         integrity: "sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy",
            //         type: "application/javascript"
            //     }]
        })
    ]
};