import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './index.css'

import menuList from '../../config/menuconfig'

import { Menu, Icon  } from 'antd';
const { SubMenu } = Menu;

class index extends Component {
  constructor(params) {
    super(params)
    this.state = {
      list: []
    }
  }
  creatMenu = () => {
    let list = menuList.map(item => {
      if (item.children) {
        return(
          <SubMenu title={<span><Icon type={item.icon}></Icon>{item.title}</span>} key={item.path}>
          {
            item.children.map(ds => {
              return (
                <Menu.Item key={ds.path}>
                  <Link to={ds.path}>{ds.title}</Link>
                </Menu.Item>
              )
            })
          }
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />{item.title}
            </Link>
          </Menu.Item>
        )
      }
    })
    this.setState({
      list
    })
  }
  componentWillMount() {
    this.creatMenu()
  }
  render() {
    return (
      <div className="menu-container">
        <Menu mode="inline" theme="dark">
          {this.state.list}
          {/* <Menu.Item>菜单项</Menu.Item>
          <SubMenu title={<span><Icon />子菜单</span>}>
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default index;
