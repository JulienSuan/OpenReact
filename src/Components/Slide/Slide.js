import React, { useEffect, useState } from "react";
import data from "../../json/data.json"
import { useParams } from "react-router-dom";
import left from "../../ressources/left.svg";
import right from "../../ressources/right.svg";


export default function Slide() {
    
    const params = useParams();
  const [index, setIndex] = useState(0);

  const [carou, setcarou] = useState([]);

    useEffect(() => {
        console.log("useeffect 1 lancé");
        const id = params.id;

        const locationData = data.find((location) => location.id === id);
        if (locationData) {
          setcarou(locationData.pictures);
        } else {
        }
      }, [params.id]);
      const prevImage = () => {
        if (index !== 0) {
          setIndex((prev) => prev - 1);
        }
        if (index === 0) {
          setIndex(carou.length - 1);
        }
      };
    
      const nextImage = () => {
        if (index !== carou.length - 1) {
          setIndex((prev) => prev + 1);
        }
        if (index === carou.length - 1) {
          setIndex(0);
        }
      };
    
  return (
    <div className="carou">
          {carou.length > 1 && (
            <>
              <div className="carouleft" onClick={prevImage}>
                <img alt="left arrow" src={left} />
              </div>
              <div className="carouright" onClick={nextImage}>
                <img alt="left right" src={right} />
              </div>
            </>
          )}

          {<img className="imagecarou" alt="carousels" src={carou[index]} />}
          <p className="counteer"> {carou.length > 1 && index + 1 + "/" + carou.length}</p>
        </div>
  )
}
