const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (env, args) {
  const isServe = env.WEBPACK_SERVE;
  const isProduction = env.production && !isServe;
  const config = {
    mode: isProduction ? 'production' : 'development',
    target: 'web',
    entry: {
      index: path.resolve(__dirname, 'src', 'index.tsx'),
    },
    output: {
      filename: '[name].js',
      library: {
        type: 'umd',
      },
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.((c|sa|sc)ss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'global',
                  exportGlobals: true,
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.mdx?$/,
          exclude: /node_modules/,
          use: ['babel-loader', '@mdx-js/loader'],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module
                .identifier()
                .split('/')
                .reduceRight((item) => item);
              return `${cacheGroupKey}-${path.parse(moduleFileName).name}`;
            },
            chunks: 'all',
          },
        },
      },
    },
    ...(isProduction ? {} : { devtool: 'source-map' }),
  };

  if (isServe) {
    config.devtool = 'eval';
    config.devServer = {
      hot: true,
      port: 8080,
    };
    config.plugins.push(
      new HtmlWebpackPlugin({
        title: 'sinabeulo',
      })
    );
    delete config.externals;
    delete config.optimization;
  }

  return config;
};
