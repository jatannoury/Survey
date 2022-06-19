import React from "react";
import Text from "./Text";
function getQuestionsDetails(question) {
  console.log(question)
  return [question]
}
const Survey = () => {
  {
    const questions = JSON.parse(localStorage.getItem("questions"));
    let questionss=[]
    for (let i=0;i<questions.length;i++){
      questionss.push(getQuestionsDetails(questions[i]))
    }
  }
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      <div className="box">
        <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
        <Text />
      </div>
    </div>
  );
};

export default Survey;
