import React from "react";
import Checkbox from "./Checkbox";
import Text from "./Text";


// console.log(  answers(1));
let questions = JSON.parse(localStorage.getItem("questions"));
questions = questions["questions"];
const answers = async (id) => {
  
  const res = await fetch(
    `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`
  );
  const data = await res.json();
  // console.log(data)
  // 
  return data;
};


  
  

  // const test1=await answers(1);
  // console.log(test1)
  return (
    <div className="survey_container">
      <div className="header">
        <h1>{localStorage.getItem("surveyName")}</h1>
      </div>
      <div className="box">
        <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
          {const }
      </div>
    </div>
  );
};

export default Survey;
