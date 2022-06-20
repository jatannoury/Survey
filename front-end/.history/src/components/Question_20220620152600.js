import React from "react";

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
      <h2>Add Answer</h2>
      <input className="text-input marg" type="text"></input>
      <br />
      <button className="button">Submit</button>
    </div>
  );
};

export default Question;
