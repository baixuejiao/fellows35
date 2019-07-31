// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveList: [],
    list: {}
  },

  getList: function(){
    console.log(this)
    wx.showLoading({
      title: '加载中。。。',
    })
    wx.cloud.callFunction({
      // 需调用的云函数名
      name: 'getMovieList',
      // 传给云函数的参数
      data: {
        _start: this.data.moveList.length,
        _count: 10,
      },
      // 成功回调
      success: function (res) {
        wx.hideLoading()
        console.log(JSON.parse(res.result));
        var result = JSON.parse(res.result);
        this.setData({
          moveList: this.data.moveList.concat(result.subjects)
        })
      }.bind(this),
      fail: function (err) {
        wx.hideLoading()
        console.log(err)
      }
    })
  },

  tap: function(event){
    var id = event.target.dataset.id
    console.log(id);
    wx.navigateTo({
      url: '/pages/comment/comment?movieId=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
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
    this.getList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})