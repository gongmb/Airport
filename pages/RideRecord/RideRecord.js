var app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    date_start: new Date().toLocaleDateString().replace(/\//g, '-'),
    date_end: new Date().toLocaleDateString().replace(/\//g, '-'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期
    var date_startNew = util.formatTime(new Date()).replace(/\//g, '-').substring(0, 10);
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      date_start: date_startNew,
    });
    // 调用函数时，传入new Date()参数，返回值是日期 
    var date_endNew = util.formatTime(new Date()).replace(/\//g, '-').substring(0, 10);
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      date_end: date_endNew,
    });
  }, 
  //开始日期
  bindDateChange: function (e) {
    this.setData({
      date_start: e.detail.value
    });
  },

  //结束日期
  bindDateChange_end: function (e) {
    this.setData({
      date_end: e.detail.value
    });
  },

  detail: function () {
    wx.navigateTo({
      url: '../DetailedRecord/DetailedRecord'
    });
  }
})