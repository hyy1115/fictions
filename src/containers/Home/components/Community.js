/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import './styles/community.less'

const Community = (props) => {
    const { data=[] } = props
    return [
        <div className="community">
            {
                data.map((v, key) => {
                    return (
                        <div key={key} className={`list`}>
                            <img src={v.icon} alt=""/>
                            <span className={`text`}>{v.text}</span>
                            <span className={`subtitle`}> {v.subtitle}</span>
                            <i className={`fa fa-angle-right`}></i>
                        </div>
                    )
                })
            }
        </div>,
        <div className={`more`}><span>添加追书查看更多追书社区</span></div>
    ]
}
export default Community