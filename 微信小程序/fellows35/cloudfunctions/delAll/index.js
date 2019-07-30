// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数端，调用数据库 只需要直接cloud.database() 不需要加‘wx’
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('userinfo').where({
    age: 28
  }).remove()
}