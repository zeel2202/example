import React, { useEffect, useState } from 'react'

function FuncLifeCycle() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(10)

    console.log("FuncLifeCycle");

    useEffect(()=>{
        console.log('mounting');
        return ()=>{
            console.log('unmount 1');
        }
    },[])
useEffect(()=>{
return ()=>{
    console.log('unmount 2');
}
},[])
    useEffect(()=>{
        console.log("count");
        console.log(count);
    },[count])

    useEffect(()=>{

        console.log('data');
    },[data])

    const handlecount=()=>{
        setCount(count+1)
        // console.log(count);
    }

  return (
    <>
    {
        console.log("render")
    }
        <h1>Func Life Cycle{count}</h1>
        <h1>Func Life Cycle{data}</h1>
        <button onClick={handlecount}>count</button>
        <button onClick={()=>setData(data+1)}>data</button>
        
    </>
  )
}

export default FuncLifeCycle