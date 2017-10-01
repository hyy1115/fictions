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
                data.map((v, key) => <span key={key} className="tab-list" onClick={() => tabClick(key+1)}><i>{v}</i></span>)
            }
            <span className="border-bottom" style={{left: tabId == 1 ? 0 : '50%'}}></span>
        </div>
    )
}
Tab.propTypes = {
    data: PropTypes.array
}
export default Tab