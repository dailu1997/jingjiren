Component({
  options: {
    addGlobalClass: true,
  },
  data: {
  
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
  },

  methods: {
    yong: function () {
      console.log(1)
      wx.navigateTo({
        url: '/pages/my/yongjin/yongjin?name=我的拥金',
      })
    },
    money:function () {
      wx.navigateTo({
        url: '/pages/my/bang/bang?name=绑定银行卡',
      })
    },
    rule:function () {
      wx.navigateTo({
        url: '/pages/my/rule/rule?name=活动规则',
      })
    },
    collection:function () {
      wx.navigateTo({
        url: '/pages/my/collection/collection?name=我的收藏',
      })
    },
    us:function () {
      wx.navigateTo({
        url: '/pages/my/us/us?name=联系我们',
      })
    }
  }
})
