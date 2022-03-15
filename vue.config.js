const { defineConfig } = require('@vue/cli-service');
const monacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './example/main.ts'
    }
  },
  transpileDependencies: true,
  outputDir: process.env.BUILD_ENV === 'doc' ? 'docs' : 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/monaco-kaco/'
    : '/',

  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      fallback: {
        assert: require.resolve('assert/')
      },
      alias: {
        '@': path.join(__dirname, './src')
      }
    },
    plugins: [new monacoWebpackPlugin()]
  },
  chainWebpack: (config) => {
    config.output
      .libraryExport('default');
  }
});
