import React from "react";

const Answer = ({ setAns, ans, submit }) => {
  return (
    <>
      <h2>Add Answer</h2>
      <input
        onClick={(e) => {
          console.log("EHY");
        }}
        onInput={(e) => {
          submit && setAns([...ans, e.target.value]);
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
