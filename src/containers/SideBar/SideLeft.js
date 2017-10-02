import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sideLeft.less'
const data = [{
    path: '/user',
    icon: 'user'
}, {
    path: '/',
    icon: 'home'
}, {
    path: '/message',
    icon: 'inbox'
}, {
    path: '/setting',
    icon: 'cog'
}]
export default class SideLeft extends React.Component {
    render() {
        const { initState, pathname } = this.props
        return (
            <div className="side-left">
                {
                    data.map((v, key) => <Link key={key} to={v.path} className={`list ${pathname === v.path && 'active'}`} onClick={() => initState()}><i className={`fa fa-${v.icon}`}></i></Link>)
                }
            </div>
        )
    }
}