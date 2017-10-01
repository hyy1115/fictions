/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './styles/header.less'
const Header = (props) => {
    const { title, bgColor } = props
    return (
        <header className='header' style={bgColor}>
            <i className={`fa fa-bars left`}></i>
            <span>{title}</span>
            <i className={`fa fa-plus right`}></i>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    bgColor: PropTypes.object
}
export default Header