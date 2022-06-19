import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";

let questions = JSON.parse(localStorage.getItem("questions"));
questions = questions["questions"];
const Survey = () => {
  const [ans, setAns] = React.useState("");

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      
        {questions.map((e) => {
          let id = e["id"];
          let type = e["type"];
          let content = e["content"];
          <div className="box">
        <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
          axios
            .get(
              `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`
            )
            .then((response) => {
               console.log(response['data']['answers'])
               console.log("HEY")

            }
            </div>
            );
        })}
      
    </div>
  );
};

export default Survey;
