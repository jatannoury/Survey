import axios from "axios";
import React, { useEffect } from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Drop from "./Drop";
import Text from "./Text";
import { render } from "@testing-library/react";

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

  if (choices.length === 0 || !choices) {
    return <div>Loading</div>;
  }
  let drop_data = [];
  function getType(el, question) {
    console.log([el, question]);
    if (question["type"] == "radio") {
      return <Radio choice={el} />;
    } else if (question["type"] == "checkbox") {
      return <Checkbox choice={el} />;
    } else if (question["type"] == "dropDown") {
      return <Drop choice={el} />;
    } else {
      return <Text />;
    }
  }
  return (
    <div className="box">
      <h1 className="box-title">{question.content}</h1>
      {choices.map((element) =>
        question["type"] == "dropDown"
          ? (render(<select className="drop"></select>),
            getType(element, question))
          : getType(element, question)
      )}
    </div>
  );
};

export default Box;
