import React, { useContext } from 'react'
import { nameContext } from '../App'

function ChildComp3(props) {
  const value = useContext(nameContext)
  console.log(value);
  const namehandle=()=>{
    value.setName('Child Comp 3')
  }
  return (
   <>
     <div>ChildComp3{value.name}</div>
     <button onClick={namehandle}>click</button>
   </>
  )
}

export default ChildComp3