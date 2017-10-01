/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { getClientHeight } from 'utils/lib'
import Header from './components/Header'
import Tab from './components/Tab'
import MyScroll from 'containers/Commons/MyScroll'
import Add from './components/Add'
import './styles/home.less'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tabId: 1,
            tabData: ['追书架', '追书社区'],
            height: 0
        }
        this.tabClick = this.tabClick.bind(this)
        this.renderTab = this.renderTab.bind(this)
    }
    componentDidMount() {
        const header = document.querySelector('.header')
        const tab = document.querySelector('.tab')
        this.setState(() => ({height: getClientHeight() - (header.offsetHeight + tab.offsetHeight)}))
    }
    tabClick(key) {
        this.setState(() => ({...this.state, tabId: key}))
    }
    renderTab(tabId) {
        if (tabId == 1) {
            return (
                <Add />
            )
        }
    }

    render() {
        const { tabData, tabId, height } = this.state
        return (
            <div className="home">
                <Header title={`追书神器`} />
                <Tab data={tabData} tabId={tabId} tabClick={this.tabClick} />
                <MyScroll ID={`Bookcase`} height={height + 'px'}>
                    {this.renderTab(tabId)}
                </MyScroll>
            </div>
        )
    }
}
Home.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}