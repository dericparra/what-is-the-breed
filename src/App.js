import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles.css';

export default function App() {
  const [isReady, setReady] = useState(null);
  const [breeds, setBreeds] = useState(null);
  const [infos, setInfos] = useState({
    breed: "",
    image: "",
    dogName: "",
    fontFamily: "",
    fontColor: ""    
  })

  useEffect(() =>{
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => setBreeds(Object.keys(res.data.message)));
  }, []);

  useEffect(() => {
    const localInfos = JSON.parse(localStorage.getItem('infos'))
    if (localInfos) {
      setInfos({
        breed: localInfos.breed,
        image: localInfos.image,
        dogName: localInfos.dogName,
        fontFamily: localInfos.fontFamily,
        fontColor: localInfos.fontColor    
      }) 
      setReady(true)
    }
  }, [infos])
  const handlerBreed = e => {
    const breed = e.target.value
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => {
        setInfos({
          ...infos,
          image: res.data.message,
          breed: breed       
        });
      });
  };
 
  const handlerDogname = e => {
    setInfos({
      ...infos,
      dogName: e.target.value
    });
  };

  const handlerFontfamily = e => {
    setInfos({
      ...infos,
      fontFamily: e.target.value
    });
  };

  const handlerFontcolor = e => {
    setInfos({
      ...infos,
      fontColor: e.target.value
    });
  };

  const handleSubmit = () => {
    setReady(true)
    localStorage.setItem("infos", JSON.stringify(infos))
  };
 
  return (
    <div className={`${infos.fontColor} ${infos.fontFamily}`}>
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
      {isReady && <h2>{infos.dogName}</h2>}
      <div>
        { isReady && <img alt={infos.breed} src={infos.image} /> }
      </div>
    </div>
  );
}
