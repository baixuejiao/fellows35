import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

// import Button from 'antd/es/button';
import { Row, Col } from 'antd';

import Menu from './components/Menu'
import Header from './components/Header'

import IRouter from './router'



function App() {
  return (
    <div className="App">
      <Router>
        <Row>
          <Col span={4}>
            <Menu/>
          </Col>
          <Col span={20}>
            <Header/>
            <IRouter/>
            {/* <Route path="/home" component={Home}></Route>
            <Route path="/banner" component={Banner}></Route> */}
            
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;

{/* <Router>
  <Link></Link>
  <Route></Route>
</Router> */}
