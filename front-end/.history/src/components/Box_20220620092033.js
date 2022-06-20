import axios from "axios";
import React, { useEffect } from "react";
import Radio from "./Radio";
const Box = ({ question }) => {
  const [choices, setChoices] = React.useState([]);
  const getChoices = async () => {
    const resp = await fetch(
      `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${question.id}`
    );
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getChoices();
      setChoices(data.answers);
    };
    getData();
  }, []);
  console.log(choices);
  if (choices.length === 0 || !choices) {
    return <div>Loading</div>;
  }
  console.log(choices);
  return (
    <div className="box">
      <h1 className="box-title">{question.id}</h1>
      {choices.map((element) => (
        <Radio />
      ))}
    </div>
  );
};

export default Box;
