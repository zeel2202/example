import React, { useContext } from 'react'
import { Link, useNavigate,useParams,useLocation, NavLink } from 'react-router-dom'
import { loginContext } from '../App';

function Header(Component) {
    const NewComponent = (props) => {
        const params = useParams() 
        const navigate1 = useNavigate()
        const navigate = useNavigate()
        const value = useContext(loginContext)
        const location = useLocation()
        // console.log(location.pathname);
        console.log(props);
        const logOutHandle = () => {
            value.setIslogin(false)
            localStorage.removeItem("login")
            navigate("/")   
        }

        const path = [
            {
                link:"Home",
                to:'/home'
            },
            {
                link:"About",
                to:'/about'
            },
            {
                link:"Contact",
                to:'/contact'
            },
        ]


       

        return (
            <>
                <div className='bg-warning d-flex p-3 div_main'>
                    {
                        value.islogin ? <>
                            <div className={`mx-2 p-2 bg-white`}><NavLink to="/home">Home</NavLink></div>
                            <div className={`mx-2 p-2 bg-white`}><NavLink to="/about" >About</NavLink></div>
                            <div className={`mx-2 p-2 bg-white`}><NavLink to="/contact">Contact</NavLink></div>
                            <div className={`mx-2 p-2 bg-white`} onClick={logOutHandle}><NavLink to={"/logout"}>LogOut</NavLink></div>
                            {/* {
                                path.map((x,i)=>{
                                    return(
                                        <div className={`mx-2 p-2 ${location.pathname === x.to?'activeLink':'bg-white'}`} ><Link to={x.to} >{x.link}</Link></div>
                                    )
                                })
                            } */}
                            {/* <div className={`mx-2 p-2 bg-white`} onClick={logOutHandle}><Link >LogOut</Link></div> */}
                        </> : <>
                            <div className={`mx-2 p-2 bg-white`}><NavLink to="/login">Login</NavLink></div>
                            {/* <div className={`mx-2 p-2 ${location.pathname === '/login'?'activeLink':'bg-white'}`}><Link to="/login">Login</Link></div> */}
                        </>
                    }

                </div>
                <div>
                    <Component routing={{params,navigate1}}/>
                </div>
            </>
        )

    }
    return NewComponent
}

export default Header