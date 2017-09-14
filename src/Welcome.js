import React from 'react'  //引入依赖

// class Welcome extends React.Component { 
//   render() {
//     return <h1>Hello, Component</h1>;
//   }
// }

class Welcome extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      test: '1'
    }
    // setInterval(()=>{
    //   this.setState({
    //     date: new Date()
    //   })
    // })

    console.log('我已经在 constructor 里将 props 和 state 初始化好了')
  };

  componentWillMount(){
    this.setState({
      date: new Date(),
      test: 'componentWillMount'
    })
    console.log('运行到这里的话，说明马上就要运行 render 了')
  }

  render() {
    // this.setState({
    //   date: new Date(),
    //   test: 'render'
    // })
    console.log('嗯，这里是 render')
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
        <p>{this.state.test}</p>
      </div>
    )
    // return <h1>Hello, {this.props.name}</h1>;
  }
  componentDidMount(){
    this.setState({
      date: new Date(),
      test: 'componentDidMount'
    })
    console.log('已经挂载到页面里了')
  }
  componentWillReceiveProps(){
    this.setState({
      date: new Date(),
      test: 'componentWillReceiveProps'
    })
  }
  shouldComponentUpdate(){
    this.setState({
      date: new Date(),
      test: 'shouldComponentUpdate'
    })
    return true
  }
  componentWillUpdate(){
    
  }
  componentDidUpdate(){
    
  }
  componentWillUnmount(){
    console.log('要死了')
  }
}

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }

// export {Welcome}
export default Welcome

/**
 * es6语法，导出常量、函数、文件、模块，
 * export default ，默认导出，只能是一个，直接使用
 * 还有export ，命名导出，export可以导出多个，但是要用{}包裹，引用的时候也要用{}
 * 引用的时候用 import
 * 
 * CommonJS也有导出模块的语法，module.exports/ exports ，
 * 引用的时候用 require
 */
