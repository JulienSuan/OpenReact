import './App.css';
import Banner from './Components/Banner';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import bg from "./ressources/IMG.png"
import data from './json/data.json'
import { useEffect } from 'react';

console.log(data)

function App() {


 const map = data.map(elem => {
    return (
      <Card key={elem.id} id={elem.id} cover={elem.cover} title={elem.title} ></Card>
    )
  })
 
  
  return (
    <div className="App">
      <Banner image={bg} titre="Chez vous, partout et ailleurs"></Banner>
      <div className="cont-cardd">
        {map}
      </div>
    </div>
  );
}

export default App;
