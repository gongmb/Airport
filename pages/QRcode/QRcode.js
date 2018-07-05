// pages/QRcode/QRcode.js
Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(function () {
      wx.request({
        url: '',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }, 180000)
  },

  // 跳转个人中心页
  goCenter: function () {
    wx.navigateTo({
      url: '../IndividualCenter/IndividualCenter'
    });
  },

  // 跳转开通线路页
  goLine: function () {
    wx.navigateTo({
      url: '../BusList/BusList'
    });
  }
})