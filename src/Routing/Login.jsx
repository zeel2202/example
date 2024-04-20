import React, { useContext, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { loginContext } from '../App'


function Login(props) {
  const [obj, setobj] = useState({})
  const value = useContext(loginContext)
  const navigate=useNavigate()
  const loginHandle=()=>{
      localStorage.setItem("login",JSON.stringify(true))
      value.setIslogin(true)
      navigate("/home")
  }
  const getData=(e)=>{
    obj[e.target.name]=e.target.value
    setobj({...obj})
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" className='w-50 mx-auto'>
      <input type="text" className='w-100 my-2' name='username' placeholder="username" onChange={getData}/>
      <input type="text" className='w-100 my-2' name="password" placeholder ="password" onChange={getData}/>
      <button type='button' className='btn btn-dark'onClick={loginHandle}>Login</button>
      </form>
    </div>
  )
}

export default Header(Login)