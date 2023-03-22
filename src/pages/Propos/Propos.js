import React from 'react'
import "./Propos.css"
import Banner from '../../Components/Banner'
import image from "../../ressources/image_bg.png"
import Tag from '../../Components/Tag/Tag'

export default function Propos() {
  return (
    <div className='propos_container'>
        <Banner image={image}></Banner>
        <Tag titre="Fiabilité" desc="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."></Tag>
        <Tag titre="Respect" desc="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."></Tag>
        <Tag titre="Service" desc="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."></Tag>
        <Tag titre="Sécurité" desc="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."></Tag>
    </div>
  )
}
