module.exports = {
    productionSourceMap: false, // 把打包后的js.map文件删掉
    publicPath: './', // 解析资源文件用相对路径
    lintOnSave: false, // 关闭eslint
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