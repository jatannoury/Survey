import React from "react";
import Answer from "./Answer";
const Question = ({ surveyName }) => {
  const [nbOfAns, setNb] = React.useState(0);
  const [ans, setAns] = React.useState([]);
  const [type, setType] = React.useState("");
  const [question, setQuestion] = React.useState("");

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
          <Answer setAns={setAns} ans={ans} />
        ))}

      <button
        onClick={console.log(question, ans, type, surveyName)}
        className="button"
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
