import React from "react";

const Card = props => {
  return (
    <div className="card">
      <button  className="cardButton" onClick={(e) => {props.onCardClicked(props.index)}}>
        <img src={props.info.image} />
        <h4>{props.info.label}</h4>
        <p>calories: {props.info.calories}</p>
      </button>
    </div>
  );
};

export default Card;
