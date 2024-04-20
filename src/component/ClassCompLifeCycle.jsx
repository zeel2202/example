import React, { Component } from 'react'
import ClassCompLifeCycle2 from './ClassCompLifeCycle2';

export default class ClassCompLifeCycle extends Component {
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

    shouldComponentUpdate(props,state){
      console.log("shouldComponentUpdate"); 
      if(state.a===5){
        return false;
      }else{
        return true
      }
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
      console.log( "getSnapshotBeforeUpdate" );
      console.log("prevprops",prevprops);
      console.log("prevstate",prevstate);
      return 'wjfgeyf'
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
     <>
      <div>ClassCompLifeCycle{this.state.a}</div>
      <button onClick={()=>this.setState({a:this.state.a+1})}>click</button>
     </>
    )
  }
}
