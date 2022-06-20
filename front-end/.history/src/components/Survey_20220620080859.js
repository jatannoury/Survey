import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";
import Box from "./Box";

const Survey = () => {
  let questions = JSON.parse(localStorage.getItem("questions"));
  questions = questions["questions"];
  let answers = [];

  {
    questions.map((e) => {
      let id = e["id"];

      axios
        .get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`)
        .then((res) => {
          const newItem = {
            question: e["content"],
            answers: res.data.answers,
          };
          answers.push(newItem);
        });
    });
  }

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      {questions.map((e, index) => {
        console.log(e["content"]);
        console.log("index", index);
        return <Box question={e["content"]} choices={answers} />;
      })}
    </div>
  );
};

export default Survey;
