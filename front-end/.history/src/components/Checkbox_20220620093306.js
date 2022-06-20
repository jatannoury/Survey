import React from "react";

const Checkbox = ({ choice }) => {
  return (
    <div className="flex">
      <input
        type="checkbox"
        className="checkbox"
        name="fav_language"
        value="HTML"
      ></input>
      <h3>{choice.answer}</h3>
    </div>
  );
};

export default Checkbox;
