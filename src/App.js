import { PureComponent, createContext, useState } from 'react';
import './App.css';
import Pera from './component/Pera';
import About from './Routing/About';
import Contact from './Routing/Contact';
import Home from './Routing/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import ChildComp3 from './component/ChildComp3';
import ChildComp4 from './component/ChildComp4';
import ClassCompLifeCycle from './component/ClassCompLifeCycle';
import ClassCompLifeCycle2 from './component/ClassCompLifeCycle2';
import UnMountCom from './component/UnMountCom';
import FuncLifeCycle from './component/FuncLifeCycle';
import CrudFunc from './component/CrudFunc'
import UseMemo from './component/UseMemo';
import PureCompo from './component/PureComp';
import MemoComp from './component/MemoComp';
import PerantButton from './component/PerantButton';
import CustomHook from './component/CustomHook';
import ApiCrud from './api/ApiCrud';
import TokenApi from './api/TokenApi';
import Login from './Routing/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About1 from './Routing/About1';
import About2 from './Routing/About2';
import AboutHome from './Routing/AboutHome';
import PageNotFound from './Routing/PageNotFound';
import ClassComp from './Routing/ClassComp';
import Loader from './api/Loader';
import ReducerComp from './reducer/ReducerComp';

export const nameContext   = createContext()
export const loginContext = createContext()

function App() {
  const [name, setName] = useState("Oscar Career point")
  const [islogin, setIslogin] = useState(JSON.parse(localStorage.getItem('login')))
  const [view, setView] = useState(true)
  return (
    <>
    {/* <Loader/> */}
    {/* <loginContext.Provider value={{setIslogin,islogin}}>
      <BrowserRouter>
        <Routes>
          {
            !islogin  ?
              <>
                <Route path='/' element={<Navigate to={'/login'}/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/home' element={<Navigate to={'/login'}/>} />
              </> : <>
                <Route path='/' element={<Navigate to={'/home'}/>} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />}>
                  <Route path='' element={<AboutHome />} />
                  <Route path='about1' element={<About1 />} />
                  <Route path='about2' element={<About2 />} />
                </Route>
                <Route path='/contact' element={<Contact />}>
                  <Route path=':name' />
                </Route>
                <Route path='/abc' element={<ClassComp/>}/>

              </>
          }
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </loginContext.Provider> */}
    {/* <ApiCrud/> */}
    <ReducerComp/>
    </>
  );
}

export default App;
