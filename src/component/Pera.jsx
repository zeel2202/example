import React from 'react'
import ChildComp1 from './ChilComp1'

function Pera(props) {
  return (
    <div>
        <h1>pera</h1>
        <ChildComp1 name={props.name}/>
    </div>
  )
}

export default Pera