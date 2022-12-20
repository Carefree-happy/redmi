const path = require("path");

module.exports = {
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        filename: "bundle.js", 
        // path: path.join(__dirname, "development"),
        // path: path.join(__dirname, "production"),
        path: path.join(__dirname, "none"),
    },
};
