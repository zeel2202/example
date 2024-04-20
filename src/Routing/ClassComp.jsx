import React, { Component } from 'react'
import Header from './Header'

 class ClassComp extends Component {
    constructor(props){
        super(props)
        console.log(this.props.routing.params
        );
        
    }
    navigateFunc=()=>{
        this.props.routing.navigate1("/")
    }
  render() {
    return (
      <div>ClassComp
        <button onClick={()=>this.navigateFunc()}>click</button>
      </div>
    )
  }
}


export default Header(ClassComp)