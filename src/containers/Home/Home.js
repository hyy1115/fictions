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
import Community from './components/Community'
import './styles/home.less'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tabId: 1,
            tabData: ['追书架', '追书社区'],
            height: 0,
            community: [{
                icon: require('./files/dynamic.svg'),
                text: '动态',
                subtitle: ''
            }, {
                icon: require('./files/discuss.svg'),
                text: '综合讨论区',
                subtitle: ''
            }, {
                icon: require('./files/review.svg'),
                text: '书评区',
                subtitle: '[找书必看]'
            }, {
                icon: require('./files/helpEach.svg'),
                text: '书荒互助区',
                subtitle: ''
            }, {
                icon: require('./files/originality.svg'),
                text: '原创区',
                subtitle: ''
            }, {
                icon: require('./files/girl.svg'),
                text: '女生区',
                subtitle: ''
            }]
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
    renderTab(tabId, community) {
        if (tabId == 1) {
            return (
                <Add />
            )
        } else {
            return <Community data={community}/>
        }
    }

    render() {
        const { tabData, tabId, height, community } = this.state
        const { barsClick, leftBar } = this.props
        return (
            <div className="home" style={{transform: leftBar ? 'translateX(25%)' : 'translateX(0)'}}>
                <Header title={`追书神器`} barsClick={barsClick} />
                <Tab data={tabData} tabId={tabId} tabClick={this.tabClick} />
                <MyScroll ID={`Bookcase`} height={height + 'px'}>
                    {this.renderTab(tabId, community)}
                </MyScroll>
            </div>
        )
    }
}