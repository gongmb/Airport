Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 乘车记录
  RideRecord: function () {
    wx.navigateTo({
      url: '../RideRecord/RideRecord'
    });
  }, 
   // 开通路线
  BusList: function () {
    wx.navigateTo({
      url: '../BusList/BusList'
    });
  },

  // 常见问题
  CommonProblem: function () {
    wx.navigateTo({
      url: '../CommonProblem/CommonProblem'
    });
  },
  // 暂停使用
  StopService: function () {
    wx.navigateTo({
      url: '../StopService/StopService'
    });
  }
})