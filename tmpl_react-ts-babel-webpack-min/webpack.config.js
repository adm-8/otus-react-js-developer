const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, 'dist'), // папка куда ложатся файлы после сборки
        filename: 'bundle.[contenthash].js', // [contenthash] нужен, чтобы в случае изменений были новые имена файлов
        clean: true, // удаление содержимого dist перед сборкой, чтобы не копился мусор
    },
    devtool: 'source-map', // для поддержки исходных файлов при дебаге
    module: {
        // набор правил
        rules: [
            // все файлы, оканчивающиеся на .js, исключая папку node_modules, прогонять через babel-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    // подключение плагинов
    plugins: [
        // плагин для сборки HTML
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
}