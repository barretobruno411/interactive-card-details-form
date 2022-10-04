import React from "react";
import cardBack from "../images/bg-card-back.png"
import "./CardBack.css";

const Header = ({secureNumber = "000"}) => {
  return (
    <div>
      <div className="card-back">
        <img src={cardBack} alt="card front" />
        <div className="card-infos">
          <h3 className="secure-number">{secureNumber}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
