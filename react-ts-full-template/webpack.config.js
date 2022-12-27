import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = "./src/index.tsx";
export const output = {
  path: join(__dirname, "dist"),
  filename: "bundle.[contenthash].js",
  clean: true, // удаление содержимого dist перед сборкой, чтобы не копился мусор
};
export const devtool = "source-map";
export const module = {
  // набор правил
  rules: [
    // все файлы, оканчивающиеся на .js, исключая папку node_modules, прогонять через babel-loader
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
};
export const plugins = [
  // плагин для сборки HTML
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
];
