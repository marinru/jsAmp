const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WebpackNotifierPlugin = require("webpack-notifier");

console.log(`We are here: ${__dirname}`);

module.exports = function(env, options) {
    const isProduction = options.mode === "production";
    console.log(`production=${isProduction}`);
    
    return {
        entry: {
            app: "@"
        },
        output: {
            path: path.join(__dirname, "client", "dist"),
            filename: "[name].js",
            publicPath: "/dist/"
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    libs: {
                        test: /node_modules/,
                        name: "libs",
                        chunks: "all"
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.vue$/,
                    use: ["vue-loader"]
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.json$/,
                    type: 'javascript/auto',
                    use: ["json-loader"]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 10000
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({}),
            new VueLoaderPlugin(),
            new WebpackNotifierPlugin()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            },
            extensions: [".js", ".vue", ".scss"]
        }
    };
};