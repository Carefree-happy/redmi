const path = require("path");

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
    }
};
