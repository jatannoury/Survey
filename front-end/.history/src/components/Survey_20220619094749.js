import React from "react";
import Text from "./Text";
async function()=>
const Survey = () => {
  {
    const questions = JSON.parse(localStorage.getItem("questions"));
    
    for (let i=0;i<questions.length;i++){
      
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
