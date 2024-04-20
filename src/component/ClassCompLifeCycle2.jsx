import React, { Component } from 'react'
export default class ClassCompLifeCycle2 extends Component {
    constructor(){
        super()
        this.state={
        }
        console.log('constructor 4');
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps 5");
        // console.log("props",props);
        // console.log("state",state);
        return true
    }
    componentDidMount(){
        console.log("componentDidMount 8");
    }
  render() {
    console.log("render 6");
    return (
      <div>ClassCompLifeCycle2</div>
    )
  }
}
