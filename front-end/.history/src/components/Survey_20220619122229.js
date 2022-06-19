import React from "react";
import Checkbox from "./Checkbox";
import Text from "./Text";

`const addTask = async (task) => {
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  setTasks([...tasks, data]);
};
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
        
 
      </div>
    </div>
  );
};

export default Survey;
