import React from "react";
import Question from "./Question";
const SurveyB = () => {
  return (
    <div className="admin_box">
      <h2>Add Survey Name</h2>
      <input className="text-input " type="text"></input>
      <h2>Input Number Of Questions</h2>
      <input className="text-input " type="text"></input>
      <Question />
    </div>
  );
};

export default SurveyB;
