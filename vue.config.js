const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: process.env.BUILD_ENV === 'doc' ? 'docs' : 'dist',
  configureWebpack: {
    resolve: {
      fallback: {
        assert: require.resolve('assert/')
      }
    }
  }
});
