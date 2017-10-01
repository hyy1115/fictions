import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
const history = createHistory()

import './app.less'

import asyncComponent from './AsyncComponent'
import SideLeft from 'containers/SideBar/SideLeft'
import Home from 'containers/Home/Home'
import ReactChildrenMap from './containers/Commons/ReactChildrenMap'

const routers = [{
    path: '/',
    exact: true,
    main: Home
}]

export default class App extends React.Component {

    componentDidMount() {
        window.addEventListener('hashchange', () => {
           //this.props.currentAnimate('normal')
        })
    }
  render() {
      return (
          <Router>
              <div>
                  {/*<SideLeft />*/}
                  {
                      routers.map((v, key) =>
                          <Route key={key} exact={v.exact} component={v.main} />
                      )
                  }
              </div>
          </Router>
    )
  }
}