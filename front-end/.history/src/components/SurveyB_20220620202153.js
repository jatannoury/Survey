import React from "react";
import Question from "./Question";
const SurveyB = () => {
  const [nbOfQuestions, setN] = React.useState(0);
  return (
    <div className="admin_box">
      <h2>Add Survey Name</h2>
      <input className="text-input " type="text"></input>
      <h2>Input Number Of Questions</h2>
      <input
        onChange={(e) => {
          setN(parseInt(e.target.value));
          console.log(e.target.value);
        }}
        className="text-input "
        type="text"
      ></input>
      {Array(nbOfQuestions ? nbOfQuestions : 0)
        .fill()
        .map((item, i) => (
          <Question />
        ))}
    </div>
  );
};

export default SurveyB;
