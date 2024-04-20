import React, { Component, PureComponent } from 'react'

export default class PureCompo extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0,
            data:20
        }
    }
  render() {
    console.log('njskqbdw');
    return (
      <div>
        <h4>PureComponent{this.state.count}</h4>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
        <button onClick={()=>this.setState({data:this.state.data+1})}>Count</button>
      </div>
    )
  }
}
