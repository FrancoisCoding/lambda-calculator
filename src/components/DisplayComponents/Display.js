import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Specials from "../ButtonComponents/SpecialButtons/Specials";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Logo from "./Logo";

const Display = () => {
  return (
    <>
      <div className="calculatorContainer">
        <div className="calculatorLogo">
          <Logo />
        </div>
        <div className="calculatorButtons">
          <div>
            <Specials />
            <Numbers className="numbersBtn" />
          </div>
          <div>
            <Operators />
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
