const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'monaco-kaco',
  outputDir: process.env.BUILD_ENV === 'doc' ? 'docs' : 'dist',
  configureWebpack: {
    resolve: {
      fallback: {
        assert: require.resolve('assert/')
      }
    }
  }
});
