Page({
  data: {
    
  },

  onLoad: function (options) {
    
  },
  // 关闭按钮，点击删除草稿
  StopService: function (e) {
    // var that = this;
    // var id = e.target.dataset.id
    // 唤出弹窗，确定是否暂停
    wx.showModal({
      content: '确定暂停已开通的机场大巴出行码服务么？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: '',
            data: {},
            header: {},
            method: 'POST',
            dataType: 'json',
            success: function (res) {
              // 如果成功，重新获取草稿列表
              that.getList();
            },
            fail: function () {
              wx.showToast({
                title: '网络异常',
                mask: true,
                icon: 'loading'
              })
            }
          })
        }
      }
    })
  },
  RideRecord:function(){
    wx.navigateTo({
      url: '../RideRecord/RideRecord'
    });
  }
})