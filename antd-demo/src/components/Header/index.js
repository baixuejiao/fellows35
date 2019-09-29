import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

import './index.css'

class index extends Component {
  render() {
    return (
      <div className="header">
        <Breadcrumb className="header-bread">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="header-personal">
          <img src="./avatar.png" />
        </div>
      </div>
    );
  }
}

export default index;