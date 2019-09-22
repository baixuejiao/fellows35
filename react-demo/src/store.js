import {createStore} from 'redux'
import reducer from './reducer'

let initState = {
  num: 0,
  userInfo: {},
  isLogin: false
}

// createStore 第一个参数是一个reducer（fun） 第二个参数是一个obj 存储的是状态管理的一些变量
let store = createStore(reducer, initState)

export default store