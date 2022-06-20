import React from "react";

const Answer = ({ setAns, ans }) => {
  return (
    <>
      <h2>Add Answer</h2>
      <input
        onChange={(e) => {
          setAns(e);
        }}
        className="text-input marg"
        type="text"
      ></input>
      <br />
    </>
  );
};

export default Answer;
