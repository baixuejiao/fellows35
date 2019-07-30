// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello wolrd',
    inputValue: 8887,
    list: [111,222,333],
    isLogin: true
  },

  clickBtn: function(){
    console.log('bindtap');
  },

  click1: function(event){ 
    // event.target.dateset 自定义的属性 data-*
    console.log(event)
  },

  click2: function () {
    console.log('div2')
  },

  getValue(){
    console.log(this.data.inputValue)

    // setData() 设置data值
    this.setData({
      msg: '你好'
    })
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