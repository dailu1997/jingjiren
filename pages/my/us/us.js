// pages/my/we/we.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problem: [
      '无法打开小程序', '小程序卡顿', '黑白屏', '小程序闪退', '页面加载慢', '界面错位'
    ],
    tel: '13325381716'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name;
    wx.setNavigationBarTitle({
      title: name,
    })
  },
  calling: function () {
    let that = this
    console.log(that.data.tel)
    wx.makePhoneCall({
      phoneNumber: that.data.tel, //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  tijiao: function () {
    wx.showToast({
      title: '提交成功',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})