/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './styles/tab.less'

const Tab = (props) => {
    const { data, tabId, tabClick } = props
    return (
        <div className="tab">
            {
                data.map((v, key) => <div key={key} className={`tab-body`} onClick={() => tabClick(key+1)}><span className="tab-list"><i>{v}</i></span></div>)
            }
            <span className="border-bottom" style={{left: tabId == 1 ? 0 : '50%'}}></span>
        </div>
    )
}
Tab.propTypes = {
    data: PropTypes.array
}
export default Tab