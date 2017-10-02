import React from 'react'
import './styles/add.less'
const Add = (props) => {
    const { text='添加你喜欢的小说', addClick } = props
    return (
        <div className="add-fictions" onClick={() => addClick()}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-plus fa-stack-1x"></i>
            </span>
            <span className={`text`}>{text}</span>
        </div>
    )
}
export default Add