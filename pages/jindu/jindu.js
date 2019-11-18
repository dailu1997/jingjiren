// pages/jindu/jindu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textArray1:[
      '到访记录', '1.人数:2人;停留时间：0.5~1小时;关心问题：价格，改善，学区房；购买意向：认可', '2019-09-11 21:09:09','2.人数:2人;停留时间：2小时以上;关心问题：价格；购买意向：强烈'
    ],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
     var that = this
     wx.setNavigationBarTitle({
       title: t.name,
     })
     that.setData({

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