import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate()

  return (
    <div className='Error_container'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <p onClick={() => navigate("/")}>Retourner sur la page d’accueil</p>
    </div>
  )
}
