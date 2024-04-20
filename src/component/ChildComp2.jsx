import React from 'react'
import ChildComp3 from './ChildComp3'

function ChildComp2(props) {
  return (
   <>
    <div>ChildComp2 </div>
    <ChildComp3 name={props.name}/>
   </>
  )
}

export default ChildComp2