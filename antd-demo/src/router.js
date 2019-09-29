import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Home from './views/Home';
import Banner from './views/Banner'

class router extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home}></Route>
        <Route path="/banner" component={Banner}></Route>
      </div>
    );
  }
}

export default router;