import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter, NavLink} from 'react-router-dom'

import Home from "./components/Home";
import A from './components/A'
import B from './components/B'
import C from "./components/C";
import F from "./components/F";

import './index.css'

const Main = withRouter((props) => {
  console.log('main:',props)
  return (
    <div>
      <button>click</button>
    </div>
  )
})

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Main/>
          {/* 路由的跳转 to的内容的对应的页面地址  */}
          {/* <Link to="/">go to page Home</Link><br/>
          <Link to="/a">go to page A</Link><br/>
          <Link to="/b/5/aaaa">go to page B</Link><br/>
          <Link to="/c/5/aaaa">go to page C</Link><br/>
          <Link to="/d">go to page D</Link><br/>
          <Link to="/e">go to page E</Link><br/>
          <Link to="/f">go to page F</Link><br/> */}

          <NavLink to="/" activeStyle={
            {
              opacity: 0.1
            }
          }>go to page Home</NavLink><br/>
          <NavLink to="/a" activeClassName="activea" >go to page A</NavLink><br/>
          <NavLink to="/b/5/aaaa">go to page B</NavLink><br/>
          <NavLink to="/c/5/aaaa">go to page C</NavLink><br/>
          <NavLink to="/d" isActive={() => {
            console.log(123456789)
          }}>go to page D</NavLink><br/>
          <NavLink to="/e">go to page E</NavLink><br/>
          <NavLink to="/f">go to page F</NavLink><br/>

          {/* 引入组件 path 对应的是页面的地址 component对应的是组件 */}
          {/* exact 严格匹配模式 默认的 /a与/都会被匹配到 严格模式下就不会被同时匹配到 */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/a" component={A}></Route>
          <Route path="/b/:id/:name" component={B} name="123"></Route>
          <Route path="/c/:id/:name" component={C} ></Route>

          {/* render属性 渲染一个function形式定义的组件 */}
          <Route path="/d" render={
            ({history}) => {
              return (
                <div>
                  page D
                  <button onClick={()=>{
                    history.goForward()
                  }}>goForward</button>
                </div>
              )
            }
          } ></Route>

          {/* <Route path="/e" render={()=> <div>page E</div> } ></Route> */}

          {/* Redirect 重定向 */}
          <Route path="/e" render={()=> {
            return <Redirect to="/a"></Redirect>
          }} ></Route>

          {/* children function形式定义的组件 */}
          <Route path="/f" children={F} ></Route>

          {
            /* switch 匹配到第一个符合条件的路由组件（子元素）
            如果使用switch模式的话，需要把 / 放在最后面  */
          }
          {/* <Switch>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/f" children={F} ></Route>
            <Route path="/" component={Home}></Route>
          </Switch> */}



          {/* <Link to="/path1/path2"></Link>
          <Link to="/path1/path3"></Link>
          <Link to="/path1/sjm"></Link>
          <Link to="/path1/lw"></Link>
          
          <Switch>
            <Route path="/path1/path2" component={Home}></Route>
            <Route path="/path1/path3" component={Home}></Route>
            <Route path="/path1/:user" component={Home}></Route>
          </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
