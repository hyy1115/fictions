import React from 'react'
import './styles/sideLeft.less'
export default class SideLeft extends React.Component {
    render() {
        return (
            <div className="side-left">
                <div className={`list`}><i className="fa fa-user"></i></div>
                <div className={`list`}><i className="fa fa-home"></i></div>
                <div className={`list`}><i className="fa fa-inbox"></i></div>
                <div className={`list`}><i className="fa fa-cog"></i></div>
            </div>
        )
    }
}