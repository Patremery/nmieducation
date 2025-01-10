const path = require("path");

module.exports = {
    entry: "./resources/js/app.tsx",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "app.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }, ],
    },
    mode: "development",
};