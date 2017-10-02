import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
const history = createHistory()

import './app.less'

import asyncComponent from './AsyncComponent'
import SideLeft from 'containers/SideBar/SideLeft'
import Home from 'containers/Home/Home'
import SideRight from 'containers/SideBar/SideRight'
import ReactChildrenMap from './containers/Commons/ReactChildrenMap'

export default class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            leftBar: false,
            rightPlus: false
        }
        this.barsClick = this.barsClick.bind(this)
        this.plusClick = this.plusClick.bind(this)
        this.initState = this.initState.bind(this)
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
           //this.props.currentAnimate('normal')
        })
    }
    barsClick() {
        this.setState(() => ({...this.state, leftBar: !this.state.leftBar}))
    }
    plusClick() {
        this.setState(() => ({...this.state, rightPlus: !this.state.rightPlus}))
    }
    initState() {
        this.setState(() => ({...this.state, rightPlus: false, leftBar: false}))
    }
    render() {
        const { leftBar, rightPlus } = this.state
        return (
            <Router>
                <div>
                    <SideLeft />
                    <Route exact={true}
                           render={() => <Home barsClick={this.barsClick} leftBar={leftBar} rightPlus={rightPlus} plusClick={this.plusClick} initState={this.initState}/>}
                    />
                    <SideRight />
                </div>
            </Router>
        )
    }
}