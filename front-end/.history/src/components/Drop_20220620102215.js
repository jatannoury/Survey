import React from "react";

const Drop = ({ choice }) => {
  return (
    console.log("FROM DROP",choice)
    <select className="drop">
      <option>{choice.answer}</option>
    </select>
  );
};

export default Drop;
