/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Header from './components/Header'
import Tab from './components/Tab'

import './styles/home.less'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tabId: 1,
            tabData: ['追书架', '追书社区']
        }
        this.tabClick = this.tabClick.bind(this)
    }
    componentWillMount() {
    
    }
    tabClick(key) {
        this.setState(() => ({...this.state, tabId: key}))
    }

    render() {
        const { tabData, tabId } = this.state
        return (
            <div className="home">
                <Header title={`追书神器`} />
                <Tab data={tabData} tabId={tabId} tabClick={this.tabClick} />
            </div>
        )
    }
}
Home.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}