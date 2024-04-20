import React from 'react'
import Header from './Header'
import {Link, Outlet, useParams} from 'react-router-dom'

function About() {
  const params = useParams()
  console.log(params);
  return (
   <>
    <Outlet/>
   </>
  )
}

export default Header(About);