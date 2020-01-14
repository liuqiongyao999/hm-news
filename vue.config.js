module.exports = {
  devServer: {
    open: true
  },
  // rem 的配置
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 其实就是设计图的 rootFontSize 一般移动端屏幕是375 推荐写37.5
            // 考虑到如果使用了第三方的ui库，会有问题。
            // 量设计图的时候，把设计图缩小一倍
            // 这个插件是/10的标准 这个项目的尺寸是360 所以把remUnite设置为36
            remUnit: 36
          })
        ]
      }
    }
  }
}
