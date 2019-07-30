// pages/xiaocai/xiaocai.js

Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  add: function(){
    // callFunction 调用云函数
    // name: 云函数的名称
    // data： 函数的参数（实参）
    // complete：成功的回掉函数
    wx.cloud.callFunction({
      name: 'add',
      data: {
        a: 1,
        b: 2
      },
      complete: function(res){
        console.log(res);
      }
    })
  },

  getInfo: function(){
    wx.cloud.callFunction({
      name: 'login',
      complete: function (res) {
        console.log(res);
      }
    })
  },

  removeAll: function(){
    wx.cloud.callFunction({
      name: 'delAll',
      complete: function (res) {
        console.log(res);
      }
    })
  },

  chooseImg: function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        console.log(res);
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: 'xiaocainiao_'+Math.random()+'.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: res.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res)
          },
        })
      }
    })
  },

  downloadimg: function(){
    wx.cloud.downloadFile({
      fileID: 'cloud://miniapp-13tuu.6d69-miniapp-13tuu-1259329899/xiaocainiao.png', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
      },
      fail: console.error
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