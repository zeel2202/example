import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(10)
    const [data, setdata] = useState(0)
    
    // const counter =()=>{
    //     console.log('wfwfwf');
    //     return (
    //         <h2>You clicked {count} times</h2>
    //     )
    // }

    const counterMemo =useMemo(()=>{
        console.log(count);
        return (
            <h2>You clicked {count} times</h2>
        )
    },[count])
    const datafunc =()=>{
        console.log('data');
        return (
            <h2>You clicked data {data} times</h2>
        )
    }
    const datafuncmemo =useMemo(()=>{
        console.log('data');
        return (
            <h2>You clicked data {data} times</h2>
        )
    },[data])
    
  return (
      <div>
        <h3>UseMemo{count}</h3>
        {counterMemo}
        {datafuncmemo}
        {datafunc}
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setdata(data+1)}>data</button>
    </div>
  )
}

export default UseMemo