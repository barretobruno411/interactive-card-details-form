import React from "react";
import cardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
import "./CardFront.css";

const defaultName = "Jane Appleseed";
const defaultNumber = "0000 0000 0000 0000";
const defaultExpDate = "00/00";
const Header = ({
  name = defaultName,
  number = defaultNumber,
  expDate = defaultExpDate,
}) => {
  return (
    <div>
      <div className="card-front">
        <img src={cardFront} alt="card front" />
        <div className="card-infos">
          <img src={cardLogo} alt="card logo" className="card-logo" />
          <h2 className="card-number">{number}</h2>
          <div className="front-card-bottom">
            <h3>{name}</h3>
            <h3>{expDate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
