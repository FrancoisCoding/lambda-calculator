import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [stateSpecials, setSpecial] = useState(specials);
  const specialsMapped = stateSpecials.map(digits => digits);

  return (
    <div className="specialBtnContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {stateSpecials.map(special => (
        <SpecialButton key={special} specialsMapped={special} />
      ))}
    </div>
  );
};

export default Specials;
