const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GeoQuiz Flags Dev',
        }),
    ],
    devServer: {
        static: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // use: [
                //     {
                //         loader: "file-loader",
                //         options: {
                //             name: "[path][name].[ext]"
                //         }
                //     }
                // ]
            }
        ]
    }
};