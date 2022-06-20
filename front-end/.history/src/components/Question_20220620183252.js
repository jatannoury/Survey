import React from "react";
import Answer from "./Answer";
const Question = () => {
  return (
    <div className="admin_box ad">
      <h2>Add Question Type</h2>
      <select className="drop admin">
        <option>dropDown</option>
        <option>radio</option>
        <option>checkbox</option>
        <option>textArea</option>
      </select>
      <h2>Add Question</h2>
      <input className="text-input " type="text"></input>
      <h2>Input number of answers</h2>
      <input
        onChange={(e) => {
          {
            Array(parseInt(e))
              .fill()
              .map((item, i) => <Answer />);
          }
        }}
        className="text-input "
        type="text"
      ></input>

      <button className="button">Submit</button>
    </div>
  );
};

export default Question;
