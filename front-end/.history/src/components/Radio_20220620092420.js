import React from "react";

const Radio = ({ choice }) => {
  return (
    <div className="flex">
      <input
        type="radio"
        className="radio"
        name="fav_language"
        value="HTML"
      ></input>
      <h3>{choice.content}</h3>
    </div>
  );
};

export default Radio;
