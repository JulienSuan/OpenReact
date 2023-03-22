import React from 'react'
import "./Tag.css"
import arrow from "../../ressources/arrow.svg"
import { useState } from 'react';
export default function Tag({titre, desc}) {

    const [isClicked, setisClicked] = useState(true);

  return (
    <div className="big_tag_container" onClick={() => setisClicked(!isClicked)}>
        <div className='tag_container'>
            <p>{titre}</p>
            <img src={arrow} className={isClicked ? "arroww" : "active_arroww"} />
        </div>
        {isClicked ? <p className='tag_desc'>{desc}</p> : null}
    </div>
    
  )
}
