module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      // 根节点 fontsize
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root'],
    }
  }
}