const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const sveltePreprocess = require('svelte-preprocess');

module.exports = function (env, args) {
  const isServe = env.WEBPACK_SERVE;
  const isProduction = env.production && !isServe;
  const config = {
    mode: isProduction ? 'production' : 'development',
    target: 'web',
    entry: {
      index: path.resolve(__dirname, 'src', 'index.ts'),
    },
    externals: {
      svelte: 'svelte',
      'svelte/internal': 'svelte',
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
          test: /\.(html|svelte)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              preprocess: sveltePreprocess({}),
            },
          },
        },
        {
          test: /\.((c|sa|sc)ss)$/i,
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
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.svelte'],
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
    config.entry.index = path.resolve(__dirname, 'src', 'preview', 'index.ts');
    config.devServer = {
      hot: true,
      port: 8083,
    };
    config.plugins.push(
      new HtmlWebpackPlugin({
        title: 'sinabeulo-svelte',
      })
    );
    delete config.externals;
    delete config.optimization;
  }

  return config;
};
