import React from 'react'
import { Link } from 'react-router-dom'
import './styles/leftBar.less'
const LeftBar = (props) => {
    const { data=[], currentParam, leftBarClick, tabId } = props
    return (
        <div className={`rank-bar`}>
            {data.map((v, key) => <Link to={`/leaderboard${v.url}`} key={key} onClick={() => leftBarClick(tabId, v.url.match(/^\/(\w+)$/)[1])} style={{color: regexNav(currentParam) === v.text && 'rgb(168, 0, 14)', background: regexNav(currentParam) === v.text && '#fff'}}>{v.text}</Link>)}
        </div>
    )
}
export default LeftBar

function regexNav(str) {
    switch(str) {
        case 'hot':
            return '最热榜'
        case 'potential':
            return '潜力榜'
        case 'click':
            return '点击榜'
        case 'finish':
            return '完结榜'
        case 'sign':
            return '签约榜'
        case 'update':
            return '更新榜'
        default:
            break
    }
}