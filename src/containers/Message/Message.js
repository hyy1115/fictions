import React from 'react'
import { getClientHeight } from 'utils/lib'
import Header from '../Home/components/Header'
import MyScroll from 'containers/Commons/MyScroll'

import './styles/message.less'
export default class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0
        }
        this.data = []
    }
    componentDidMount() {
        const header = document.querySelector('.header')
        this.setState(() => ({height: getClientHeight() - header.offsetHeight }))
    }
    render() {
        const { barsClick, plusClick, initState, leftBar, rightPlus, initStart, initMove, initEnd } = this.props
        const { height } = this.state
        return [
            <Header key={`MH`} title={`我的消息`} barsClick={barsClick} plusClick={plusClick} plusShow={false} />,
            <MyScroll key={`MM`} ID={`Message`} height={height + 'px'}>
                {
                    this.data.length > 0 ? <div></div> : <div style={{textAlign: 'center', padding: '1rem 0'}}>没有消息</div>
                }
            </MyScroll>,
            (leftBar || rightPlus) &&
            <div key={`D`} style={{width: '100%', height: '100vh', opacity: 0, position: 'absolute', left: 0, top: 0}}
                 onClick={() => initState()}
                 onTouchStart={(event) => initStart(event)}
                 onTouchMove={(event) => initMove(event)}
                 onTouchEnd={(event) => initEnd(event)}
            ></div>
        ]
    }
}