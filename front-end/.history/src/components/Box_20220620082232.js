import axios from "axios";
import React from "react";
import Radio from "./Radio";
const Box = ({ question, choices }) => {
  console.ol
  // const getChoices = () => {
  //   axios.get
  // }
  return (
    <div className="box">
      <h1 className="box-title">{question}</h1>
      {setTimeout(
        choices.map((e) => {
          return <Radio />;
        }),
        500
      )}
    </div>
  );
};

export default Box;
