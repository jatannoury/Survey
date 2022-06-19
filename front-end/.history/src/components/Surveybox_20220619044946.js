import React from "react";

const Surveybox = ({ nam }) => {
  const [surveys, setSurveys] = React.useState("");
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
