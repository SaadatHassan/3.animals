import React, { useState } from "react";
import "./App.css";
import { AnimalShow } from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cow", "horse", "dog", "cat", "gator"];
  const randomNumber = Math.floor(Math.random() * animals.length);
  return animals[randomNumber];
};

export const App = () => {
  const [animals, setAnimals] = useState([]);

  const addAnimalsHandler = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={addAnimalsHandler}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};
