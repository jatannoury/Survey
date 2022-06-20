import React from "react";

const Drop = ({ choice }) => {
  console.log("FROM DROP", choice);
  return (
    <select className="drop">
      <option>{choice.answer}</option>
    </select>
  );
};

export default Drop;
