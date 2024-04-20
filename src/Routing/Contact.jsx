import React from 'react'
import Header from './Header'
import {Link, useParams,useLocation} from 'react-router-dom'

function Contact() {
  const location = useLocation()
  console.log(location);
  const params = useParams()
  console.log(params);
  return (
    <div>
      <Link to={'/contact/123456789'}>Id</Link>
      <h1>Contact</h1>
      <h2>{params.name}</h2>
    </div>
  )
}

export default Header(Contact)