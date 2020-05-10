module.exports = {
    devServer: {
        // 配置代理服务器
        proxy: { 
            '/api': {
                target: 'http://localhost:2020', // 要转发的目标网址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' // 路径重写
                }
            },
        }
    },
}