import React, { Component } from 'react';
import { Prompt } from "react-router-dom";

class A extends Component {
  constructor(params) {
    super(params)
    this.state = {
      isEmpty: true
    }
    this.change = this.change.bind(this)
  }
  change(event) {
    if (event.target.value.length > 0) {
      console.log(123)
      this.setState({
        isEmpty: false
      })
    } else {
      this.setState({
        isEmpty: true
      })
    }
  }
  render() {
    return (
      <div>
        page A
        <button onClick={() => {
          let {history} = this.props
          history.go(2)
        }}>go</button>
        <input type="text" onChange={this.change}/>
        {/* <Prompt when={this.state.isEmpty} message="确定要下课吗？？？"></Prompt> */}
        <Prompt when={this.state.isEmpty} message={(loation) => {
          console.log(loation)
          return "are you sure ?"
        }}></Prompt>
      </div>
    );
  }
}

export default A;