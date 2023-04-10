const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "/protdb/",
  assetsDir: "static",
  outputDir: "./protdb",
  devServer: {
    proxy: {
      '/protdb/api': {
        target: 'http://81.70.221.51:6600/',
        ws: true,
        changOrigin: true,
        // pathRewrite: {
        //   '^/api': ''//请求的时候使用这个api就可以写公共地址后的地址
        // },
        logLevel: 'debug' // 用于检查代理的真实地址
      }
    }
  },
})
