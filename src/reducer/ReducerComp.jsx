import React, { useEffect, useReducer, useState } from 'react'
import { counterReducer } from './counterReducer'

function ReducerComp() {
    const [state, dispatch] = useReducer(counterReducer, [])
    useEffect(() => {
        // dispatch({ type: "get" })
    }, [])

    const addreducer=()=>{
        let obj={name:'oscar'}
        dispatch({type:'add',obj:obj})
    }


    return (
        <>
            <h3>ReducerComp{JSON.stringify(state) }</h3>
            <button onClick={addreducer}>add</button>
            {
                state.map((x, i) => {   
                return(
                    <h2 key={i}>{x.name}</h2>
                )
                })
            }
            {/* <button onClick={()=>dispatch({type:"increment"})}>increment</button> */}
        </>

    )
}

export default ReducerComp