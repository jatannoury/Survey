import React from "react";
import Answer from "./Answer";
import axios from "axios";
const Question = ({ surveyName }) => {
  const [nbOfAns, setNb] = React.useState(0);
  const [ans, setAns] = React.useState([]);
  const [type, setType] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [submit, setSubmit] = React.useState(false);
  return (
    <div className="admin_box ad">
      <h2>Add Question Type</h2>
      <select
        onChange={(e) => {
          setType(e.currentTarget.value);
          console.log(type);
        }}
        className="drop admin"
      >
        <option>Select</option>
        <option>dropDown</option>
        <option>radio</option>
        <option>checkbox</option>
        <option>textArea</option>
      </select>
      <h2>Add Question</h2>
      <input
        onChange={(e) => {
          setQuestion(e.currentTarget.value);
          console.log(question);
        }}
        className="text-input "
        type="text"
      ></input>
      <h2>Input number of answers</h2>
      <input
        onChange={(e) => {
          setNb(parseInt(e.target.value));
          console.log(e.target.value);
        }}
        className="text-input "
        type="text"
      ></input>
      {Array(nbOfAns ? nbOfAns : 0)
        .fill()
        .map((item, i) => (
          <Answer setAns={setAns} ans={ans} submit={submit} />
        ))}

      <button
        onClick={(e) => {
          console.log(question, ans, type, surveyName);

          axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/admin/add_survey",
            data: {
              name: surveyName,
            },
          }).then((res) => {
            console.log("hey");
            console.log(res);
          });
        }}
        className="button"
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
