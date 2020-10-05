const path = require("path");

module.exports = {
    devServer: {
        port: 8080,
        historyApiFallback: {
            rewrites: [{ from: /./, to: path.posix.join("/", "index.html") }]
        }
    },
    publicPath: "/",
    outputDir: "../server/public",
    runtimeCompiler: true,
    lintOnSave: false
};
