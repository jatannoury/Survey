import axios from "axios";
import React from "react";
import Radio from "./Radio";
const Box = ({ question, choices }) => {
  console.log(question);
  const getChoices = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`).then()
  }
  return (
    <div className="box">
      {/* <h1 className="box-title">{question}</h1>
      {setTimeout(
        choices.map((e) => {
          return <Radio />;
        }),
        500
      )} */}
    </div>
  );
};

export default Box;
