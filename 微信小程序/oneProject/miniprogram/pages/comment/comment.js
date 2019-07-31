// pages/comment/comment.js

const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {},
    comment: '',
    score: 5,
    files: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getMovieDetails',
      data: {
        _id: options.movieId
        // _id: "26794435"
      },
      success: function(res){
        console.log(JSON.parse(res.result));
        this.setData({
          details: JSON.parse(res.result)
        })
      }.bind(this),
      fail: function(err){
        console.log(err)
      }
    })
    console.log(options)
    // options.movieId
  },

  onInputChange: function(event){
    this.setData({
      comment: event.detail
    })
  },

  onRateChange: function(event){
    this.setData({
      score: event.detail
    })
  },

  upload: function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        this.setData({
          files: tempFilePaths
        })
      }.bind(this)
    })
  },

  submit: function(){
    db.collection('movie').add({
      data: {
        movieId: this.data.details.id,
        comment: this.data.comment,
        score: this.data.score
      },
      success: function(res){
        console.log(res)
      },
      fail: function(res){
        console.log(res)
      }
    })
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