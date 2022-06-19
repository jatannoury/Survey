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
let answers=[]
{questions.map((e) => {
  let id = e["id"];
  let type = e["type"];
  let content = e["content"];
  axios
    .get(
      `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`
    )
    .then((response) => {
      answers.push(response['data']['answers'])
      
     });

    }
    
    );
}
console.log(answers)
  const [ans, setAns] = React.useState("");
let counter=0
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
        {questions.map((e)=>{
          
        })}
      </div>
      
    </div>
  );
};

export default Survey;
