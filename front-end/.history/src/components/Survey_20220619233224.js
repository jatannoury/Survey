import React from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Text from "./Text";
import axios from "axios";
import { render } from "@testing-library/react";
import Box from "./Box";

const Survey = () => {
  const [ans,setAns]
  let questions=JSON.parse(localStorage.getItem("questions"))
  questions=questions["questions"]
  for (let i=0;i<questions.length;i++){
    console.log(questions[i]['id'])
  }
  return (
    <></>
  );
};

export default Survey;
