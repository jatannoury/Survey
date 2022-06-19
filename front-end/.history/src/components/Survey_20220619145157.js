import React from "react";
import Checkbox from "./Checkbox";
import Text from "./Text";

let questions = JSON.parse(localStorage.getItem("questions"));
questions = questions["questions"];
const Survey = () => {
  const [ans, setAns] = React.useState("");
  const fetchAns = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`
    );
    const data = await res.json();
    console.log(data);
    setAns(data);
    return data;
  };
function printData(type){

}
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      <div className="box">
        <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
        {questions.map((e) => {
          let id = e["id"];
          let type = e["type"];
          let content = e["content"];
          printData(type)
        })}
      </div>
    </div>
  );
};

export default Survey;
