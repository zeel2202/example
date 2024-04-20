import React, { memo } from 'react'

function ButtonComp(props) {
    console.log('ButtonComp',props.value);
  return (

    <div>
        <button onClick={props.changeCount}>{props.children}</button>
        <h2>{props.value}</h2>
    </div>
  )
}

export default memo(ButtonComp)