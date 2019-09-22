import { combineReducers } from "redux"

// state 需要有默认的初始值
const num = (state=0, action) => {
  console.log(action.text)
  switch(action.type) {
    case 'ADD':
      return state+1;
    case 'DEL':
      return state-1;
    default:
      return state
  }
  
}

const reducer = combineReducers ({
  num
})
export default reducer