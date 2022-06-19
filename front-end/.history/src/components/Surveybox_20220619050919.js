import React from "react";

const Surveybox = ({ nam }) => {
  const [survey, setSurvey] = React.useState("");
  React.useEffect(
    (e) => {
      async function fetchSurveys() {
        const res = await fetch(
          `http://127.0.0.1:8000/api/v1/user/get_questions`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);

        return data;
      }
      fetchSurveys();
    },
    [survey]
  );
  return (
    <div
      onClick={(e) => {
        setSurvey(e.target.innerText);
        console.log(survey);
      }}
      className="survey_b"
    >
      <h2>{nam}</h2>
    </div>
  );
};

export default Surveybox;
