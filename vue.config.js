const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  
  devServer: {
    host: '0.0.0.0', // Permite el acceso desde cualquier IP
    proxy: {
      '/api': {
        target: 'http://192.168.100.24:5000', // Servidor Flask
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
      '/telemetry': {
        target: 'http://localhost:25555', // Servidor de telemetría ETS2
        changeOrigin: true,
        pathRewrite: { '^/telemetry': '/api/ets2/telemetry' }
      }
    }
  }
})
