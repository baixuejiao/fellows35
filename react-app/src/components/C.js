import React from 'react';

const C = ({match, history}) => {
  console.log(history)
  return (
    <div>
      page C
      <p>{match.params.id}</p>
      <p>{match.params.name}</p>
      <button onClick = {() => {
        // 进入到指定路径
        history.push('/a') 

      }}>push</button>
      <button onClick = {() => {
        // 后退一步
        history.goBack()
      }}>goBack</button>
      <button onClick = {() => {
        // 前进或后退n步
        history.go(-2)
      }}>go</button>
    </div>
  )
}

export default C;