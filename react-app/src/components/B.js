import React, { Component } from 'react';

class B extends Component {
  render() {
    console.log(this.props)
    // 通过match 接收路由传递过来的信息
    let {match} = this.props
    console.log(match)
    return (
      <div>
        page B
        <p>{this.props.match.params.id}</p>
        <p>{this.props.match.params.name}</p>
      </div>
    );
  }
}

export default B;