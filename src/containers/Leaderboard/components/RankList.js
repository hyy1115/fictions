import React from 'react'
import { Link } from 'react-router-dom'
import './styles/rankList.less'
export default class RankList extends React.Component {
    render() {
        const { data=[] } = this.props
        return (
            <div className={`rank-list`}>
                {
                    data.map((v, key) => {
                        return (
                            <Link key={key} to={`/bookDetails/${v.bid}`} className={`clearfix`}>
                                <img src={`https://qidian.qpic.cn/qdbimg/349573/${v.bid}/150`} />
                                <div className={`rank-list-right`}>
                                    <p className={`b-name`}>{v.bName}</p>
                                    <p className={`b-auth`}>{v.bAuth}</p>
                                    <p className={`b-auth`}>{v.desc}</p>
                                    <p className={`b-pink`}>{v.cnt} | {v.rankCnt || v.state}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}