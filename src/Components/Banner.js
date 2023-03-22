import React from 'react'
import "./Banner.css"

export default function Banner({image, titre}) {
  return (
    <div className="banner" style={{backgroundImage: `url("${image}")`}}>
        <div className="filter">
            <h1 className='banner_title'>{titre}</h1>
        </div>
  </div>
  )
}
