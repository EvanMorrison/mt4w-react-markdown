const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackCdnPlugin = require("webpack-cdn-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production" || process.env.NODE_ENV === "performance";
const isPerformance = process.env.NODE_ENV === "performance";

module.exports = {
  mode: isProduction ? "production" : "development",

  context: path.resolve(__dirname, "src"),

  devServer: (() => {
    if(isProduction) return {};
    return {
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true,
      port: parseInt(process.env.PORT, 10) || 5000,
    }
  })(),

  devtool: isProduction ? "hidden-source-map" : "cheap-eval-source-map",

  entry: {
    app: "./index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: (() => {
        if (isProduction) return '[name].[chunkhash].js';
        else return '[name].bundle.js';
    })(),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader",
            options: {
              babelrc: false,
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    "targets": "> 0.25%, not dead"
                  }
                ],
                "@babel/preset-react",
                [
                  "@emotion/babel-preset-css-prop",
                  {
                    "autoLabel": true,
                    "labelFormat": "[local]",
                    "sourceMap": true,
                  }
                ]
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-dynamic-import",
                "react-hot-loader/babel"
              ]
            }
          },
          {
            loader: "eslint-loader",
            options: {
              enforce: "pre",
              emitWarning: true,
              failOnWarning: false
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "stylelint-custom-processor-loader",
        options: {
          emitWarning: true
        }
      }, {
        test: /\.(ico|svg|png|gif|jpe?g)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }]
      }, {
        test: /\.md$/,
        use: [{
          loader: "raw-loader"
        }]
      }, {
        test: /manifest\.(webmanifest|json)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }, {
          loader: "app-manifest-loader"
        }]
      }
    ]
  },

  plugins: (() => {
    let pluginsList = [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        cdnModule: "deps",
        filename: "index.html",
        title: "Massage, Manual Lymphatic Drainage, Myofascial Release | Lymphatic Massage | Manual Therapy for Wellness | MT4W",
        inject: "body"
      }),
      new WebpackCdnPlugin({
        modules: {
          deps: [
            { name: "react", var: "React", path: `umd/react.${isProduction ? "production.min" : "development"}.js` },
            { name: "react-dom", var: "ReactDOM", path: `umd/react-dom.${isProduction ? "production.min" : "development"}.js` },
            { name: "react-router", var: "ReactRouter", path: "umd/react-router.min.js" },
            { name: "react-router-dom", var: "ReactRouterDOM", path: "umd/react-router-dom.min.js" },
            { name: "@material/button", var: "Button", cssOnly: true, style: "dist/mdc.button.css"},
            { name: "@material/textfield", var: "TextField", cssOnly: true, style: "dist/mdc.textfield.css"}
          ]
        }
      })
    ];

    if(!isProduction) {
      pluginsList.push(
        new webpack.HotModuleReplacementPlugin()
      );
    }

    if (isProduction) {
      pluginsList.push(
        new CleanWebpackPlugin(["dist"], {
          exclude: ["favicon.ico", "manifest.json"]
        }),
        new webpack.HashedModuleIdsPlugin()
      );
    }

    if(isPerformance) {
      pluginsList.push(
        new BundleAnalyzerPlugin()
      );
    }
    return pluginsList;
  })(),

  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin()
    ],
    splitChunks: {
      chunks: "all"
    }
  }
};
