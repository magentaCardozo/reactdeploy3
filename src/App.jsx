import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { StyledNavbar } from './components/navbar.style'

const App=()=> {
  return (
    <>
    <div className='theApp'>

        <StyledNavbar></StyledNavbar>
        <div className='container-fluid-css'>

            <Outlet></Outlet>
        </div>
        <Footer></Footer>

    </div>    
    </>
  )
}


export default App
