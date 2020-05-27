import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles.css';

export default function App() {
  const [isReady, setReady] = useState(null);
  const [breeds, setBreeds] = useState(null);
  const [infos, setInfos] = useState({
    Breed: "",
    Image: "",
    DogName: "",
    FontFamily: "",
    FontColor: ""    
  })

  useEffect(() =>{
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => setBreeds(Object.keys(res.data.message)));
  }, []);

  const handlerBreed = e => {
    const breed = e.target.value
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => {
        setInfos({
          ...infos,
          Image: res.data.message,
          Breed: breed       
        });
      });
  };
 
  const handlerDogname = e => {
    setInfos({
      ...infos,
      DogName: e.target.value
    });
  };

  const handlerFontfamily = e => {
    setInfos({
      ...infos,
      FontFamily: e.target.value
    });
  };

  const handlerFontcolor = e => {
    setInfos({
      ...infos,
      FontColor: e.target.value
    });
  };

  const handleSubmit = () => {
    setReady(true)
  };
 
  console.log(infos)

  return (
    <div className={`${infos.FontColor} ${infos.FontFamily}`}>
      <select onChange={handlerBreed}>
        <option>Select Breed</option>
        {breeds && 
          breeds.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
      </select>
      <input onChange={handlerDogname} placeholder="What is the dog name ?" />
      <select onChange={handlerFontfamily}>
        <option>Select Font Family</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Lato">Lato</option>
        <option value="Noto">Noto Sans JP</option>
        <option value="Open">Open Sans</option>
        <option value="Roboto">Roboto</option>
      </select>
      <select onChange={handlerFontcolor}>
        <option>Selec Font Color</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
        <option value="Purple">Purple</option>
        <option value="Yellow">Yellow</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
      {isReady && <h2>{infos.DogName}</h2>}
      <div>
        { isReady && <img alt={infos.Breed} src={infos.Image} /> }
      </div>
    </div>
  );
}
