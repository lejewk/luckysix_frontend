module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:8081' // 개발서버
          }
      }
  }
}