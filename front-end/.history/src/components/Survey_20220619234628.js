import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";
import Box from "./Box";

const Survey = () => {
  const [ans,setAns]=React.useState([])
  let questions=JSON.parse(localStorage.getItem("questions"))
  questions=questions["questions"]
  React.useEffect(()=>{
    axios
      .get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${questions[0]['id']}`)
      .then((response) => {
        console.log(response)
        setAns([...ans,response.data.answers])
      });
  },[])
  
    
if(ans[0]){
  console.log(ans[0][0])
  console.log(ans)
}

  return (
    // <div className="survey_container">
    //   <div className="header">
    //     <h1>{localStorage.getItem("surveyName")}</h1>
    //   </div>
    //   {questions.map((e) => {
    //     console.log("index", answers);
    //     index = index + 1;
    //     return <Box question={e["content"]} choices={answers} />;
    //   })}
    // </div>
    <></>
  );
};

export default Survey;
