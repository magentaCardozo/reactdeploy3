import React from 'react'
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Panier from './Panier'
import whatsapp from '../assets/whatsapp.svg'
import { StyledInput } from './ui/input.style'
import { StyledSearchIcon } from './ui/searchIcon.style'
import { StyledLogoWhatsapp } from './logoWhatsapp.style'
import { StyledMenuIcon } from './ui/menuIcon.style'
import { StyledPanier } from './panier.style'
import { RoutesList } from '../data/Routes'
const Navbar = ({className}) => {
  return (
<div>
{ 
  <>
    <nav className={`navbar-css ${className}`} >
      <div className=" navbar  row container-fluid-css-2">
        <div className='first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between' >

          <Link to={RoutesList.Home} className='link-css title-css navbar-brand  d-block'>
            <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
            ChezArdi            
    </Link>

          <StyledInput/>
          <div className='d-flex flex-row flex-row justify-content-between'>
            <StyledSearchIcon ></StyledSearchIcon>
              <div style={{marginLeft:'12px'}}></div>

            <StyledMenuIcon></StyledMenuIcon>
          </div>

        </div>
      <div className="second-col  col-md-4 col-lg-3 col-12 " >
        <ul className="navbar-nav  list-css d-flex flex-row align-items-center justify-content-between">

          <Link to={RoutesList.Products} className='link-css nav-item d-block'>
              Produits
              </Link>
          
          <li className="nav-item d-block d-flex flex-row">
            <StyledLogoWhatsapp></StyledLogoWhatsapp>
            <div style={{marginLeft:'7px'}}></div>
            <StyledPanier></StyledPanier>
          </li>

        </ul>
          


      </div>
      </div>

  </nav> 

  </>

}
    </div>
  )
}


export default Navbar
