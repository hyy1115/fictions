import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sideRight.less'
const data = [{
    bgColor: 'rgb(255, 255, 255)',
    color: 'rgb(25, 25, 25)',
    icon: 'search',
    text: '搜索',
    url: '/'
}, {
    bgColor: 'rgb(240, 0, 40)',
    color: 'rgb(255, 255, 255)',
    icon: 'bar-chart',
    text: '排行榜',
    url: '/leaderboard/hot'
}, {
    bgColor: 'rgb(240, 63, 25)',
    color: 'rgb(255, 255, 255)',
    icon: 'star-o',
    text: '主题书单',
    url: '/'
}, {
    bgColor: 'rgb(77, 157, 219)',
    color: 'rgb(255, 255, 255)',
    icon: 'snowflake-o',
    text: '分类',
    url: '/'
}, {
    bgColor: 'rgb(243, 135, 24)',
    color: 'rgb(255, 255, 255)',
    icon: 'headphones',
    text: '听书专区',
    url: '/'
}, {
    bgColor: 'rgb(92, 144, 35)',
    color: 'rgb(255, 255, 255)',
    icon: 'lightbulb-o',
    text: '随机看书',
    url: '/'
}]
const SideRight = (props) => {
    return (
        <div className="side-right">
            {
                data.map((v, key) => <Link to={v.url} onClick={() => props.initState()} className={`list`} key={key}><span style={{background: v.bgColor}} className={`square`}><i className={`fa fa-${v.icon}`} style={{color: v.color}}></i></span><span className={`text`}>{v.text}</span></Link>)
            }
        </div>
    )
}
export default SideRight