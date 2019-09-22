import React, { Component } from 'react';
import store from './store'
import {add, del} from './action'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello react</h1>

        <button onClick = { () => {
          console.log('add number')
          store.dispatch(add(1))
        }}>add</button>

        <button onClick = { () => {
          console.log('del number')
          store.dispatch(del())
        }}>del</button>
        <p>{store.getState().num}</p>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.num
  }
} 

export default connect(mapStateToProps)(App);