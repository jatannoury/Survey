import React from "react";

const Radio = ({ choice }) => {
  console.log(choice);
  return (
    <div className="flex">
      <input
        type="radio"
        className="radio"
        name="fav_language"
        value="HTML"
      ></input>
      <h3>{choice.answer}</h3>
    </div>
  );
};

export default Radio;
