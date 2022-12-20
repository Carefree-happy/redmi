const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        filename: "bundle.js", 
        // path: path.join(__dirname, "development"),
        // path: path.join(__dirname, "production"),
        path: path.join(__dirname, "dist"),
    },
    module: { 
        rules: [ // 转换规则
            {
                test: /\.css$/, //匹配所有的 css 文件
                use: 'css-loader' // use: 对应的 Loader 名称
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
