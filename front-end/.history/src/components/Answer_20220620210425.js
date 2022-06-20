import React from "react";

const Answer = ({ setAns, ans }) => {
  return (
    <>
      <h2>Add Answer</h2>
      <input
        onAbort={(e) => {
          setAns([...ans, e.target.value]);
          console.log(ans);
        }}
        className="text-input marg"
        type="text"
      ></input>
      <br />
    </>
  );
};

export default Answer;
