import React from 'react'
import PropTypes from 'prop-types'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router'
import { getClientWidth } from 'utils/lib'

import './app.less'

import asyncComponent from './AsyncComponent'
import SideLeft from 'containers/SideBar/SideLeft'
import Home from 'containers/Home/Home'
import SideRight from 'containers/SideBar/SideRight'
import Message from 'containers/Message/Message'
import Leaderboard from 'containers/Leaderboard/Leaderboard'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftBar: false,
            rightPlus: false,
            leftLocation: 25,
            rightLocation: 75,
        }
        this.barsClick = this.barsClick.bind(this)
        this.plusClick = this.plusClick.bind(this)
        this.initState = this.initState.bind(this)
        this.initStart = this.initStart.bind(this)
        this.initMove = this.initMove.bind(this)
        this.initEnd = this.initEnd.bind(this)
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
    initStart(event) {
        this.start = event.targetTouches[0].pageX
    }
    initMove(event) {
        const { rightPlus } = this.state
        this.end = event.targetTouches[0].pageX
        if (rightPlus) {
            this.setState(() => ({...this.state, rightLocation: Math.abs((1 - this.end/getClientWidth()) * 100)}))
        }
        this.start = this.end
    }
    async initEnd() {
        await this.setState(() => ({...this.state, rightLocation: 75, leftLocation: 25}))
        await this.initState()
    }
    render() {
        const { leftBar, rightPlus, leftLocation, rightLocation } = this.state
        const pathname = window.location.pathname
        return (
            <Router>
                <div>
                    <SideLeft initState={this.initState} pathname={pathname} />
                    <div className="container" style={{transform: leftBar ? `translateX(${leftLocation}%)` : rightPlus ? `translateX(-${rightLocation}%)` : 'translateX(0)'}}>
                        <Route path={`/`} exact={true}
                               render={() => {
                                   return <Home barsClick={this.barsClick}
                                                leftBar={leftBar}
                                                rightPlus={rightPlus}
                                                plusClick={this.plusClick}
                                                initState={this.initState}
                                                initStart={this.initStart}
                                                initMove={this.initMove}
                                                initEnd={this.initEnd}
                                   />
                               }}
                        />
                        <Route path={`/message`}
                               render={() => {
                                   return <Message barsClick={this.barsClick}
                                                   leftBar={leftBar}
                                                   rightPlus={rightPlus}
                                                   plusClick={this.plusClick}
                                                   initState={this.initState}
                                                   initStart={this.initStart}
                                                   initMove={this.initMove}
                                                   initEnd={this.initEnd}
                                   />
                               }}
                        />
                        <Route path={`/leaderboard/:type`} component={Leaderboard} />
                    </div>
                    <SideRight initState={this.initState} />
                </div>
            </Router>
        )
    }
}
App.propTypes = {
    match: PropTypes.object
}
