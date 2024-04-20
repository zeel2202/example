import React, { memo } from 'react'

function ChilComp1(props) {
  console.log("ChilComp1");
  return (
   <>
     <div>ChilComp update func{props.updateCount()}</div>
   </>
  )
}

export default memo(ChilComp1)