import React from 'react'
import logo from "../../ressources/logo_white.svg"
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer_container'>
        <img src={logo} height={40}/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
