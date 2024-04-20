import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function HOC(Component, obj) {
    // console.log(obj);
    const NewComponent = () => {
        return (
            <div className='row m-0 p-0'>
                <div className="col-2 p-0" >
                    <Sidebar />
                </div>
                <div className="col-10 p-0">
                    <Header obj={obj} />
                    <Component />
                </div>

            </div>
        )
    }
    return NewComponent
}

export default HOC