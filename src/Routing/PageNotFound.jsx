import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate()
    let val=0;
    const backHome=()=>{
        // if(val === 20){
            navigate("/")
        // }else{/
        // }
        // window.location.href='/'
    }
  return (
    <div className='d-flex justify-content-center  align-items-center flex-column ' style={{height:"100vh"}}>
        <h2>PageNotFound</h2>
        <button className='btn btn-dark' onClick={backHome}>Back To Home</button>
    </div>
  )
}

export default PageNotFound