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

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {questions.map((e, index) => {
        console.log(answers);
        return <Box question={questions[index]} choices={answers} />;
      })}
    </div>
  );
};

export default Survey;
