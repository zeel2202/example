import React, { useContext } from 'react'
import { nameContext } from '../App'

function ChildComp4() {
    const value = useContext(nameContext)
  return (
    <div>ChildComp4{value.name}</div>
  )
}

export default ChildComp4