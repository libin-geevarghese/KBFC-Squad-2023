import React from "react";
import "./components.css";

function CompOne(props) {
  return (
    <div className="cards">
      <div className="imageContainer">
        <img src={props.image} />
      </div>
      <h4>{props.name}</h4>
      <h4>{props.place}</h4>
      <h4>{props.des}</h4>
    </div>
  );
}

export default CompOne;
