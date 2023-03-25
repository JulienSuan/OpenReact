import React, { useEffect, useRef, useState } from "react";
import data from "../../json/data.json"
import star from "../../ressources/star.svg";
import stared from "../../ressources/starred.svg";
import { useParams } from 'react-router-dom';

export default function Stars() {
    const starsss = useRef(null);
  const [rating, setrating] = useState();
  const params = useParams();

    useEffect(() => {
        const id = params.id;
        const locationData = data.find((location) => location.id === id);
        if (locationData) {
          setrating(locationData.rating);
        } else {
        }
      }, [params.id]);
    
    useEffect(() => {
        let i = 0;
        const handleStar = () => {
          while (i < rating) {
            starsss.current.innerHTML += `<img src=${stared}/>`;
            i++;
            console.log(i);
          }
          let reste = 5 - i;
          console.log(reste);
          while (reste !== 0) {
            console.log(reste);
            starsss.current.innerHTML += `<img src=${star}/>`;
            reste = reste - 1;
          }
        };
        rating && setfunc(handleStar());
      }, [rating]);
    const [func, setfunc] = useState();
  return (
    <div className="stars" ref={starsss}>
                {func}
              </div>
  )
}
