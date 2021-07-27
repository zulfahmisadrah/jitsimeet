import React from "react";
import { Button, Card } from "react-bootstrap";

function FeaturesBox(props) {
  return (
    <>
      <div className="a-box">
        <div className="a-b-img">
          <img src={props.image} />
        </div>
        <div className="s-b-text">
          <h2> {props.title}</h2>
          <p style={{ marginTop: 0, paddingBottom: 24 }}>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default FeaturesBox;
