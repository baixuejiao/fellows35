import { combineReducers } from "redux"

// state 需要有默认的初始值
const num = (state=0, action) => {
  switch(action.type) {
    case 'ADD':
      return state + action.data
    default: 
      return state
  }
}

const reducer = combineReducers ({
  num
})
export default reducer