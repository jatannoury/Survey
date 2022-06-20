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
  let answer = [];
  for (let i = 0; i < questions.length; i++) {
    let id = questions[i]["id"];
    console.log(id);
    axios
      .get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`)
      .then((response) => {
        console.log(response.data);
        setAnswers([...answers, response.data]);
        console.log(answers)
      });
  }

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {questions.map((e, index) => {
        console.log(answers);
        return <Box question={e["content"]} choices={answers} />;
      })}
    </div>
  );
};

export default Survey;
