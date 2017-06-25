//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    count: 0,
    motto: 'Hello World',
    userInfo: {},
    topBanner: 'http://www.longjiashifosi.com/wp-content/themes/LJSFS2016/images/topbanner_bg.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  setCount: function(e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})
