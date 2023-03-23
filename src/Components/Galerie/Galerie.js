import React, {Fragment} from 'react'
import data from "../../json/data.json"
import Card from './../Card/Card';



export default function Galerie() {

    const map = data.map(elem => {
        return (
          <Card key={elem.id} id={elem.id} cover={elem.cover} title={elem.title} ></Card>
        )
      })
  return (
   <>
    {map}
   </>
  )
}
