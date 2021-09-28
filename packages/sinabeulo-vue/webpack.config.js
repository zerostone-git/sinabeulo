const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (env, args) {
  const isProduction = env.production;
  const config = {
    mode: isProduction ? 'production' : 'development',
    target: 'web',
    entry: {
      index: path.resolve(__dirname, 'src', 'index.ts'),
    },
    externals: {
      vue: 'vue',
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
          test: /\.css$/i,
          use: [
            'style-loader',
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
          ],
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
  return config;
};
