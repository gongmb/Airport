Page({
  data: {
    airPort: true,
   city: false
  },
  airPort: function (e) {
    this.setData({
     city: false,
      airPort: true
    })
  },
  city: function (e) {
    this.setData({
      airPort: false,
      city: true
    })
  },
ClickMore:function(){
  wx.navigateTo({
    url: '../DetailedRoute/DetailedRoute'
  });
}
})
