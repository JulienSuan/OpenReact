import React from 'react'
import "./Header.css"
import logo from "../../ressources/LOGO.svg"
import { NavLink, useNavigate } from 'react-router-dom'


export default function Header() {

  const navigate = useNavigate()

  return (

    <div className='header'>
        {<img src={logo} className='image_logo' style={{cursor: "pointer"}} onClick={() => navigate("/")}/>}
        <div className="subheader">
            <NavLink to={"/"} className="nav-link"><p className='headertag'>Accueil</p></NavLink>
            <NavLink to={"/a-propos"} className="nav-link"><p className='headertag'>A Propos</p></NavLink>
        </div>  
    </div>

  )
}
