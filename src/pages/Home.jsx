import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import HOC from './HOC'

const obj={
    name:"oscar"
}
function Home() {
  return (
    <>
                <h1>Home Page</h1>
    </>
  )
}

export default HOC(Home,obj)