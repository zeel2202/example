import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import HOC from './HOC'

function About() {
  return (
    <>
                <h1>About Page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum totam, delectus excepturi error dolorum blanditiis repudiandae sequi dignissimos iusto nostrum deserunt beatae sint repellendus neque dolor magni, libero laboriosam, debitis quibusdam facere? Aspernatur beatae distinctio sapiente minima dolor corporis veniam, autem sunt amet, voluptatum nemo quis saepe porro vel cumque?</p>
        
    </>
  )
}

export default HOC(About)