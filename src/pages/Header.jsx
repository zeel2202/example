import React from 'react'

function Header(props) {
    console.log(props);
  return (
    <>
    <div className='bg-danger p-3 d-flex justify-content-between'>
        <h2>Header</h2>
        <h5>{props.obj?.name}</h5>
    </div>
    </>

  )
}
export default Header