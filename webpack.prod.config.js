'use strict';

const path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('project is starting building bundlers in production mode')

module.exports = {
    mode: 'development',
    bail: true,
    entry:
        {
            index: path.resolve(__dirname, "src", "index.tsx")
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
                    MiniCssExtractPlugin.loader, "css-loader", "postcss-loader","sass-loader"
                ],
            },
            {
                test: /\.scss$/,
                include: /node_modules\/bootstrap/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            importLoaders: 4
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            linkType: "text/css",
            filename: '[id].entry.[contenthash:8].css',
            chunkFilename: "[id].chunk.[contenthash:8].css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
};