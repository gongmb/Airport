Page({
  data: {
    checkboxStatus: false
  },

  onLoad: function (options) {

  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },
  checkboxChange: function () {
    let that = this;
    this.setData({
      checkboxStatus: !that.data.checkboxStatus
    });
    console.log(11)
  },
  // 同意协议并开通
  onPassRide: function () {
    // 拉取小程序授权，免密支付
    if (this.data.checkboxStatus == false) {
      wx.showToast({
        title: '请选择同意协议',
        icon: 'loading',
        mask: true,
      })
    }
    if (this.data.checkboxStatus == true) {
      wx.redirectTo({
        url: '/pages/QRcode/QRcode'
      })
    }
  }
})