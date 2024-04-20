import React from 'react'
import { Link } from 'react-router-dom'

function AboutHome() {
  return (
    <div>
        <h2>About</h2>
        <Link to={'/about/about1'}>About1</Link>
    </div>

  )
}

export default AboutHome