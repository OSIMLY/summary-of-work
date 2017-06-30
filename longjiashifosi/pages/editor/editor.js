// editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    textValue: ''
  },

  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },

  fmtText: function (e) {
    debugger
    let text = this.data.textValue
    text = text.replace(/[,，、\s\n]+/g, " ")
    let nameArr = text.split(" ")
    nameArr = Array.from(new Set(nameArr))
    text = nameArr.join(" ")
    this.setData({
      textValue: text
    })
  },

  btnCopy: function (e) {
    debugger
    let self = this
    wx.getClipboardData({
      success: function (res) {
        self.data.textValue = res
      }
    })
  },

  btnPaste: function (e) {

  },

  bindTextareaInput: function (e) {
    this.data.textValue = e.detail.value
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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