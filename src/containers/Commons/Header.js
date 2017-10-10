import React from 'react'
import PropTypes from 'prop-types'
import './styles/header.less'
const Header = (props) => {
    const { title, bgColor, backClick } = props
    return (
        <header className='common-header' style={bgColor}>
            <div className={`left`} onClick={() => backClick()}><i className={`fa fa-angle-left`}></i><span>返回</span></div>
            <span>{title}</span>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.object,
    backClick: PropTypes.func
}
export default Header