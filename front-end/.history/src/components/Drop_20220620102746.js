import React from "react";

const Drop = ({ choice }) => {
  console.log("FROM DROP", choice);
  return <option>{choice.answer}</option>;
};

export default Drop;
