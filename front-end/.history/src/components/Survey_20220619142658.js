import React from "react";
import Checkbox from "./Checkbox";
import Text from "./Text";


// console.log(  answers(1));
let questions = JSON.parse(localStorage.getItem("questions"));
questions = questions["questions"];
const Survey = () => {
  const [my_answers,setMyAnswers]=React.useState([]);
  React.useEffect(()=>{
    setMyAnswers(answers(1))
    
  console.log(my_answers)
  },[])
  
  

  // const test1=await answers(1);
  // console.log(test1)
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
