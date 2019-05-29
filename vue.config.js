module.exports = {
    // baseURL:'/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://182.61.47.1:8080', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
 