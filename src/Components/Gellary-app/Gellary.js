import React, { Component } from "react";
import "./Gellary.css";

const LargeImg = props => {
  return (
    <div className="lg-img-hldr">
      <div className="top">
        <a href="#">
          <button onClick={props.closeButton} className="close-icon">
            X
          </button>
        </a>
      </div>
      <img src={props.src} alt="" />
      <div className="bottom">
        <h3 className="title">{props.title}</h3>
        <div className="descriptions">{props.details}</div>
      </div>
    </div>
  );
};

export default LargeImg;
