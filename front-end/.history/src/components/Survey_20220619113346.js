import React from "react";
import Checkbox from "./Checkbox";
import Text from "./Text";

async function getAnswers(id) {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    return data;
  } catch {}
}
let questions = JSON.parse(localStorage.getItem("questions"));
questions=questions["questions"]
const Survey = () => {

  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      <div className="box">
        <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
        {questions.map((e)=>{
          let id=e['id']
          let content=e['content']
          let type=e['type']
          switch(type){
            case "checkbox":
              return <Checkbox id={id} content={content}/>
            case "dropDown":
              return <Drop id={id} content={content}/>
            case ""
          }
          
        })}
        <Text />
      </div>
    </div>
  );
};

export default Survey;
