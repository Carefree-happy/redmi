const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

const config = {
    mode: "development", 
    entry: "./src/index.js", 
    devServer: {
        static: path.resolve(__dirname, 'public'),
        compress: true,
        port: 9000,
        open: true,
    },
    output: {
        filename: "bundle.js", 
        // path: path.join(__dirname, "development"),
        // path: path.join(__dirname, "production"),
        path: path.join(__dirname, "dist"),
    },
    module: { 
        rules: [ // 转换规则
            {
                test: /\.(s[ac]|c)ss$/i, // 匹配所有的 sass/scss/css 文件
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // use: 对应的 Loader 名称
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(), // 引入清包插件
    ]
};

module.exports = (env, argv) => {
    console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
}