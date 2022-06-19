import React from "react";
import Surveybox from "./Surveybox";

const UserLanding = () => {
  const [surveys, setSurveys] = React.useState("");
  React.useEffect(() => {
    
    async function fetchSurveys() {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/user/get_surveys`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setSurveys(data);

      return data;
    }
    fetchSurveys();
  }, []);
  console.log(surveys);
  return (
    <div className="survey_container">
      <div className="header">
        <h1>Select the survey</h1>
      </div>
      <div className="surveys">
        {React.useEffect(()=>{
            console.log("HEy",surveys)
            surveys.map((e)=>{
                return <Surveybox/>
            })
        },[surveys])}
      </div>

    </div>
  );
};

export default UserLanding;
