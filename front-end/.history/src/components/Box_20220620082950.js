import axios from "axios";
import React, { useEffect } from "react";
import Radio from "./Radio";
const Box = ({ question, choices }) => {
  const [choices, setChoices] = React.use
  const getChoices = () => {
    axios
      .get(
        `http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${question.id}`
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getChoices();
  }, []);
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
