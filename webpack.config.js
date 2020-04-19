// @ts-check
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = /** @type { import('webpack').Configuration } */ ({
    mode: 'development',
    entry: {
        sprite: path.resolve(__dirname, 'src/ts/canvas-with-sprite.ts')
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
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
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') })
    ]

});