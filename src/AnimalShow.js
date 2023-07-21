import React, { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import horse from "./svg/horse.svg";
import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg";
import gator from "./svg/gator.svg";
import cow from "./svg/cow.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  horse,
  dog,
  cat,
  gator,
  cow,
};

export const AnimalShow = (props) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt={props.type} src={svgMap[props.type]}></img>
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      ></img>
    </div>
  );
};
