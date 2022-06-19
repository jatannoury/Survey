import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";
import Box from "./Box";

const Survey = () => {
  const [answers, setAnswers] = React.useState([]);
  let questions = JSON.parse(localStorage.getItem("questions"));
  questions = questions["questions"];
  let answer = [1,2,3,4];
  for (let i = 0; i < questions.length; i++) {
    let id = questions[i]["id"];
    console.log(id);
   
  console.log(answer)
  setAnswers("1234");
  let counter = 0;
  console.log(answers);
  console.log(answers[0]);
  {
    if (answers[0] != undefined) {
      console.log(answers[0]);
    }
  }
  let index = 0;
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {questions.map((e) => {
        console.log("index", answers);
        index = index + 1;
        return <Box question={e["content"]} choices={answers} />;
      })}
    </div>
  );
};

export default Survey;
