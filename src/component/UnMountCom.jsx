import React, { Component } from 'react'

export class UnMountCom extends Component {
    constructor(props){
        super(props)
        this.state={
            a:0
        }
        console.log('constructor ');
}

static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps ");
    // console.log("props",props);
    console.log("state",state);
    return true
}

componentDidMount(){
    console.log("componentDidMount ");
}
componentWillUnmount(){
    console.log('componentWillUnmount');
}
componentDidUpdate(prevprops,prevstate,snapShot){
    console.log("componentDidUpdate") 
    console.log('prevprops',prevprops);
    console.log('prevstate',prevstate);
    console.log('snapShot',snapShot);
  }
  render() {
    console.log('render');
    return (
     <div>
         <div>UnMountCom{this.state.a}</div>
      <button onClick={()=>this.setState({a:this.state.a+1})}>click</button>
     </div>
    )
  }
}

export default UnMountCom