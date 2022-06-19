import React from "react";
import Surveybox from "./Surveybox";

const [surveys,setSurveys]=React.useState("")
React.useEffect(()=>{
    fetchSurveys();
    async function fetchSurveys() {
        const res = await fetch(`http://127.0.0.1:8000/api/v1/user/get_surveys`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
        setSurveys(data)
      
        return data;
      }
},[])

const UserLanding = () => {

  return (
    <div className="survey_container">
      <div className="header">
        <h1>Select the survey</h1>
      </div>
      <div className="surveys">
     
       
      </div>
    </div>
  );
};

export default UserLanding;
