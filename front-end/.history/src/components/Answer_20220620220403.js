import React from "react";

const Answer = ({ setAns, ans }) => {
  function clean(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) continue;
      arr[i].splice(i, 1);
    }
  }
  return (
    <>
      <h2>Add Answer</h2>
      <input
        onClick={(e) => {
          console.log("EHY");
        }}
        onBlur={(e) => {
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
