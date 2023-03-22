import React, { useEffect, useRef, useState } from "react";
import "./Location.css";
import { useParams } from "react-router-dom";
import data from "../../json/data.json";
import left from "../../ressources/left.svg";
import right from "../../ressources/right.svg";
import star from "../../ressources/star.svg";
import stared from "../../ressources/starred.svg";
import arrow from "../../ressources/arrow.svg";
import Error from "../404";

export default function Location() {
  const starsss = useRef(null);

  const [carou, setcarou] = useState([]);
  const [index, setIndex] = useState(0);
  const [title, settitle] = useState("");
  const [host, sethost] = useState({});
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState();
  const [location, setlocation] = useState("");
  const [equipments, setequipments] = useState([]);
  const [tags, settags] = useState([]);
  const [found, setFound] = useState(true);

  const params = useParams();

  useEffect(() => {
    console.log("useeffect 1 lancé");
    const id = params.id;
    const locationData = data.find((location) => location.id === id);
    if (locationData) {
      setcarou(locationData.pictures);
      settitle(locationData.title);
      setdescription(locationData.description);
      sethost(locationData.host);
      setlocation(locationData.location);
      setequipments(locationData.equipments);
      settags(locationData.tags);
      setrating(locationData.rating);
      setFound(true);
    } else {
      setFound(false);
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

  const [func, setfunc] = useState();

  console.log(starsss);
  console.log(rating);

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

  const [active, setactive] = useState(true);
  const [active2, setactive2] = useState(true);

  if (!found) {
    return <Error />;
  } else
    return (
      <div className="locaCont">
        <div className="carou">
          {carou.length > 1 && (
            <>
              <div className="carouleft" onClick={prevImage}>
                <img src={left} />
              </div>
              <div className="carouright" onClick={nextImage}>
                <img src={right} />
              </div>
            </>
          )}

          {<img className="imagecarou" src={carou[index]} />}
          <p className="counteer"> {carou.length > 1 && index + 1 + "/" + carou.length}</p>
        </div>
        <div className="cont_all_local">
          <div className="locaDesc">
            <div className="sublocal">
              <h2>{title}</h2>
              <h3>{location}</h3>
            </div>
            <div className="conttags">
            <div className="tags">
              {tags.map((res, index) => {
                return (
                  <p key={index} className="tagtag">
                    {res}
                  </p>
                );
              })}
            </div>
          </div>
          </div>
          <div className="sublocal2">
              <div className="sublocal2_cont">
                <p>{host.name}</p>
                <img src={host.picture} className="propic" />
              </div>
              <div className="stars" ref={starsss}>
                {func}
              </div>
            </div>
        </div>
        <div className="contend">
          <div className="continfo">
            <div
              className={active ? "infooa" : "infoo"}
              onClick={() => setactive(!active)}
            >
              <p>Description</p>
              <img src={arrow} className={active ? "arrowactive" : "arrow"} />
            </div>
            <div className={!active ? "infodesca" : "infodesc"}>
              {description}
            </div>
          </div>
          <div className="continfo">
            <div
              className={active2 ? "infooa" : "infoo"}
              onClick={() => setactive2(!active2)}
            >
              <p>Équipements</p>
              <img src={arrow} className={active2 ? "arrowactive" : "arrow"} />
            </div>
            <div className={!active2 ? "infodesca2" : "infodesc2"}>
              {equipments.map((res) => {
                return <p>{res}</p>;
              })}
            </div>
          </div>
        </div>
        {console.log("html chargé")}
      </div>
    );
}
