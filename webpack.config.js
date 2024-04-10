const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

let isFirstRun = true // Flag to track the first run

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos my fácilmente',
      background_color: '#fff',
      theme_color: '#EC262A',
      icons: [
        {
          src: path.resolve('src/assets/P.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }), 
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        // Runtime caching configuration
      ]
    }),
    {
      apply: compiler => {
        // Hook into compiler's 'done' event
        compiler.hooks.done.tap('AfterEmitPlugin', compilation => {
          // Check if it's the first run
          if (isFirstRun) {
            isFirstRun = false // Update flag
          } else {
            // Remove the previous GenerateSW plugin instance
            const plugins = compiler.options.plugins
            const generateSWIndex = plugins.findIndex(
              plugin => plugin instanceof WorkboxWebpackPlugin.GenerateSW
            )
            if (generateSWIndex !== -1) {
              plugins.splice(generateSWIndex, 1)
            }
            // Add a new GenerateSW plugin instance
            plugins.push(
              new WorkboxWebpackPlugin.GenerateSW({
                swDest: 'service-worker.js',
                clientsClaim: true,
                skipWaiting: true,
                maximumFileSizeToCacheInBytes: 5000000,
                runtimeCaching: [
                  // Runtime caching configuration
                ]
              })
            )
          }
        })
      }
    }
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3005
  }
}
