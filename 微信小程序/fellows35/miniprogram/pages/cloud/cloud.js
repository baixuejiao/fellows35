// pages/cloud/cloud.js

// 获取数据库的引用
// const 定一个常量 在声明的时候需要赋值，后期不可以修改 如果修改会报错
const db = wx.cloud.database()

const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 数据库的添加 
  add: function(){
    db.collection('userinfo').add({
      data: {
        name: 'xiaocai',
        age: 28
      },
      success: function(res){
        console.log('success:', res);
      },
      fail: function(err){
        console.log('fail:', err);
      }
    })
  },
  
  // 数据的更新
  // update() 方法 修改信息
  // doc() 根据id查询一条记录
  update: function(){
    db.collection('userinfo').doc('26b301645d3fb2600629ec043496a342').update({
      data: {
        name: 'laocai'
      },
      success: function (res) {
        console.log('success:', res);
      },
      fail: function (err) {
        console.log('fail:', err);
      }
    })
  },

  // 数据库的查询
  // get() 返回查询的信息
  // 可以根据id查询数据 doc() 返回一条匹配的信息
  // where() 根据属性条件进行查询 返回的是一个数组
  search: function(){
    // db.collection('userinfo').doc('26b301645d3fb2600629ec043496a342').get({
    //   success: function (res) {
    //     console.log('success:', res);
    //   },
    //   fail: function (err) {
    //     console.log('fail:', err);
    //   }
    // })

    // db.collection('userinfo').where({
    //   name: 'xiaocai'
    // }).get({
    //   success: function (res) {
    //     console.log('success:', res);
    //   },
    //   fail: function (err) {
    //     console.log('fail:', err);
    //   }
    // })

    // db.collection('userinfo').get({
    //   success: function (res) {
    //     console.log('success:', res);
    //   },
    //   fail: function (err) {
    //     console.log('fail:', err);
    //   }
    // })

    db.collection('userinfo').where({
      age: _.lt(20)
    }).get({
      success: function (res) {
        console.log('success:', res);
      },
      fail: function (err) {
        console.log('fail:', err);
      }
    })
  },

  // 删除数据库
  // remove() 删除一条记录
  del: function(){
    db.collection('userinfo').doc('face13585d3fb4ea062f34410a8df35d').remove({
      success: function (res) {
        console.log('success:', res);
      },
      fail: function (err) {
        console.log('fail:', err);
      }
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