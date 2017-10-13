import React from 'react'
import Header from 'containers/Commons/Header'
import Tab from 'containers/Home/components/Tab'
import LeftBar from './components/LeftBar'
import MyScroll from 'containers/Commons/MyScroll'
import RankList from './components/RankList'
import './styles/leaderboard.less'
import instance from 'utils/instance'
import { getClientHeight } from 'utils/lib'
export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            tabId: 1,
            tabData: ['男生', '女生'],
            leftData: [{
                url: '/hot',
                text: '最热榜'
            }, {
                url: '/potential',
                text: '潜力榜'
            }, {
                url: '/click',
                text: '点击榜'
            }, {
                url: '/finish',
                text: '完结榜'
            }, {
                url: '/sign',
                text: '签约榜'
            }, {
                url: '/update',
                text: '更新榜'
            }],
            rankData: {}
        }
        this.tabClick = this.tabClick.bind(this)
        this.getRank = this.getRank.bind(this)
        this.setHeight = this.setHeight.bind(this)
    }
    componentDidMount() {
        const { tabId } = this.state
        const params = window.location.pathname.match(/^\/leaderboard\/(\w+)$/)[1]
        this.setHeight()
        this.getRank(tabId, params)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.rankData !== this.state.rankData) {
            this.RankList.jroll.scrollTo(0, 0)
            setTimeout(() => this.RankList.jroll.refresh(), 300)
        }
    }
    async setHeight() {
        const header = document.querySelector('.common-header')
        const tab = document.querySelector('.tab')
        await this.setState(() => ({height: getClientHeight() - (header.offsetHeight + tab.offsetHeight)}))
        await this.RankList.jroll.refresh()
    }
    async getRank(tabId, params) {
        const { rankData } = this.state
        let type = 'man'
        if (tabId != 1) {
            type = 'woman'
        }
        const result = await instance.get(`/rank/${type}/${params}`)
        if (result) {
            rankData[tabId] = result.data.bookRank
        }
        await this.setState(() => ({...this.state, rankData: rankData}))
    }
    tabClick(key, params) {
        this.setState(() => ({...this.state, tabId: key}))
        this.getRank(key, params)
    }
    render() {
        const { tabData, tabId, leftData, height, rankData } = this.state
        return [
            <Header key={`LH`} title={`排行榜`} backClick={() => this.props.history.push('/')} />,
            <Tab key={`LT`} data={tabData} tabId={tabId} tabClick={this.tabClick} params={window.location.pathname.match(/^\/leaderboard\/(\w+)$/)[1]} />,
            <MyScroll key={`LBT`} ID={`LeaderBoard`} height={height + 'px'}>
                <LeftBar data={leftData} leftBarClick={this.tabClick} currentParam={window.location.pathname.match(/^\/leaderboard\/(\w+)$/)[1]} tabId={tabId}/>
                <div className={`right`}>
                    <MyScroll ID={`RankList`} ref={RankList => this.RankList = RankList} height={height + 'px'}>
                        <RankList data={rankData[tabId] || []}/>
                    </MyScroll>
                </div>
            </MyScroll>
        ]
    }
}