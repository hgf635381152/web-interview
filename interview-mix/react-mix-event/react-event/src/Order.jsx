import React from 'react'

export default class Order extends React.Component {
  childRef = React.createRef()
  parentRef = React.createRef()
  child = (e) => {
    console.log(1)
    e.stopPropagation()
  }
  parent = () => {
    console.log(2)
  }
  componentDidMount() {
    // document.addEventListener('click', () => {
    //   哪一个 DOM 节点 回调该被执行
    // })
    document.addEventListener('click', () => {
      console.log('document')
    })
    this.childRef.current.addEventListener('click', () => {
      console.log('child')
    })
    this.parentRef.current.addEventListener('click', () => {
      console.log('parent')
    })
    const element = (<ul>
      <li>1</li>
      <li>2</li>
    </ul>)
    console.log(element)
  }
  render() {
    return (
      <div onClick={this.parent} ref={this.parentRef}>
        parent
        <div onClick={this.child} ref={this.childRef}>
          child
        </div>
      </div>
    )
  }
}