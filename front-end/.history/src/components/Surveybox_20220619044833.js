import React from "react";

const Surveybox = ({ nam }) => {
  
  return (
    <div
      onClick={(e) => {
        setSurvey(e.target.innerText);
        console.log(survey);
      }}
      className="survey_b"
    >
      <h2>{nam}</h2>
    </div>
  );
};

export default Surveybox;
