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

export default class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            leftBar: false
        }
        this.barsClick = this.barsClick.bind(this)
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
           //this.props.currentAnimate('normal')
        })
    }
    barsClick() {
        console.log(this)
        this.setState(() => ({...this.state, leftBar: !this.state.leftBar}))
    }
    render() {
        return (
            <Router>
                <div>
                    <SideLeft />
                    <Route exact={true} render={() => <Home barsClick={this.barsClick} leftBar={this.state.leftBar}/>} />
                </div>
            </Router>
        )
    }
}