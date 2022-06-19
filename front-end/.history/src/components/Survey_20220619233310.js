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
  for (let i=0;i<questions.length;i++){
    axios
      .get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`)
      .then((response) => {
        console.log(response)
      });
  }
  return (
    <></>
  );
};

export default Survey;
