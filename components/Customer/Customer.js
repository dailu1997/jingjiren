Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    id:"1"
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
    active:function (e) {
      var that = this;
      that.setData({
        id: e.currentTarget.dataset.id
      })
      console.log(e.currentTarget.dataset.id)
    },
    jindu:function () {
      wx.navigateTo({
        url: '../../pages/jindu/jindu?name=客户进度',
      })
    }
  }
})
