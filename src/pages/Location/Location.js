import React, { useEffect, useState } from "react";
import "./Location.css";
import { useParams } from "react-router-dom";
import data from "../../json/data.json";
import arrow from "../../ressources/arrow.svg";
import Error from "../404";
import Slide from "../../Components/Slide/Slide";
import Stars from "../../Components/Stars/Stars";

export default function Location() {
  

  const [title, settitle] = useState("");
  const [host, sethost] = useState({});
  const [description, setdescription] = useState("");
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
      settitle(locationData.title);
      setdescription(locationData.description);
      sethost(locationData.host);
      setlocation(locationData.location);
      setequipments(locationData.equipments);
      settags(locationData.tags);
      setFound(true);
    } else {
      setFound(false);
    }
  }, [params.id]);



 



  const [active, setactive] = useState(true);
  const [active2, setactive2] = useState(true);

  if (!found) {
    return <Error />;
  } else
    return (
      <div className="locaCont">
       <Slide></Slide>
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
                <img src={host.picture} alt="host.name" className="propic" />
              </div>
              <Stars></Stars>
            </div>
        </div>
        <div className="contend">
          <div className="continfo">
            <div
              className={active ? "infooa" : "infoo"}
              onClick={() => setactive(!active)}
            >
              <p>Description</p>
              <img src={arrow} alt="left arrow" className={active ? "arrowactive" : "arrow"} />
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
              <img src={arrow}  alt="right arrow" className={active2 ? "arrowactive" : "arrow"} />
            </div>
            <div className={!active2 ? "infodesca2" : "infodesc2"}>
              {equipments.map((res, index) => {
                return <p key={index}>{res}</p>;
              })}
            </div>
          </div>
        </div>
        {console.log("html chargé")}
      </div>
    );
}
