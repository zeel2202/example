import React, { useCallback, useState } from 'react'
import ButtonComp from './ButtonComp'

function PerantButton() {
    const [count, setCount] = useState(0)
    const [data, setdata] = useState(10)
    const changeCount=useCallback(()=>{
        setCount(count+1)
    },[count])
    const changeData=useCallback(()=>{
        setdata(data+1)
    },[data])
  return (
    <div>
        <h1>PerantButton {count}</h1>
        <h1>data {data}</h1>
        <ButtonComp changeCount={changeCount} value={count}>count</ButtonComp>
        <ButtonComp  changeCount={changeData} value={data}>data</ButtonComp>
        {/* <button onClick={changeCount}>click</button>
        <button onClick={changeData}>click</button> */}
    </div>
  )
}

export default PerantButton