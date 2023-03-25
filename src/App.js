import './App.css';
import Banner from './Components/Banner';
import bg from "./ressources/IMG.png"
import Galerie from './Components/Galerie/Galerie';


function App() {



  
  return (
    <div className="App">
      <Banner image={bg} titre="Chez vous, partout et ailleurs"></Banner>
      <div className="cont-cardd">
        <Galerie></Galerie>
      </div>
    </div>
  );
}

export default App;
