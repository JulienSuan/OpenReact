import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom';


export default function Card({cover, title, id}) {
  
  const navigate = useNavigate()
  console.log(cover);
  console.log(title);


  return (

    <div onClick={() => navigate("/location/"+id)} className='cont-card' style={{backgroundImage: "url("+cover+")"}}>
      <h3 className='descCard'>{title}</h3>
    </div>
  )
}
