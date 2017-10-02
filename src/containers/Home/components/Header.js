/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './styles/header.less'
const Header = (props) => {
    const { title, bgColor, barsClick, plusClick, plusShow=true } = props
    return (
        <header className='header' style={bgColor}>
            <i className={`fa fa-bars left`} onClick={() => barsClick()}></i>
            <span>{title}</span>
            {
                plusShow && <i className={`fa fa-plus right`} onClick={() => plusClick()}></i>
            }
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    bgColor: PropTypes.object
}
export default Header