// @ts-check
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = /** @type { import('webpack').Configuration } */ ({
    mode: 'development',
    entry: {
        guia: path.resolve(__dirname, 'src/ts/guia.ts'),
        person: path.resolve(__dirname, 'src/ts/person.ts'),
        playground: path.resolve(__dirname, 'src/ts/playground.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
        new CleanWebpackPlugin()
    ]

});