import React from "react";

const Drop = ({ choice }) => {
  return (
    <select className="drop">
      {choice.map((e) => {
        return <option>e</option>;
      })}
    </select>
  );
};

export default Drop;
