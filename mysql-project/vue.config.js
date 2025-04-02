const { defineConfig } = require('@vue/cli-service')
const serverOrigin ='http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api': {  //정규식 /api로 시작하는 문자열 을 포함하는 요청에 따라서 proxy를 실행해 달라.
        target : serverOrigin,       // 변경할 origin
        changeOrigin : true,         // 변경 여부
        ws : false,                  // websocket 설정 여부
        pathRewrite : {'^/api' : '/'} // 경로 재작성 ; 임의로 제작한 /api 경로를 / 로 재작성한다.
      }
      
    }
  }
})
