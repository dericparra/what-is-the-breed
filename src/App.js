import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles.css';

export default function App() {
  const [infos, setInfos] = useState({
    Breed: "",
    DogName: "",
    FontFamily: "",
    FontColor: ""
  })

  const handlerBreed = e => {
    setInfos({
      ...infos,
      Breed: e.target.value
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
  console.log(infos)

  return (
    <div className={`${infos.FontColor} ${infos.FontFamily}`}>
      <select onChange={handlerBreed}>
        <option>Select Breed</option>
        <option value="Akita">Akita</option>
        <option value="Boxer">Boxer</option>
        <option value="Beagle">Beagle</option>
        <option value="Bulldog">Bulldog</option>
        <option value="Husky">Husky</option>
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
      {infos.DogName}
    </div>
  );
}
