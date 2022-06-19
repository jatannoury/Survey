import React from "react";
import Checkbox from "./Checkbox";
import Text from "./Text";
const [id,setId]
React.useEffect((id) => {
  axios.get(`http://127.0.0.1:8000/api/v1/user/get_answers?question_id=${id}`).then((response) => {
   console.log(response)
  });
}, []);

console.log(answers())
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
        {}
 
      </div>
    </div>
  );
};

export default Survey;
