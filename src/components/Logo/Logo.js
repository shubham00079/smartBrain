import React from "react";
import Tilt from "react-tilt";
// allows us to hover
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            style={{ paddingTop: "5px", height: 130, width: 100 }}
            alt="logo"
            src={brain}
          ></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
