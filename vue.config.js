const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false, // turn off HTTPS
    client: {
      webSocketURL: {
        protocol: 'ws',
        port: 8080,
        pathname: '/ws',
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/igihe.vue/'
    : '/'
})
