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
function load (surveys){
    
}
  return (
    <div className="survey_container">
      <div className="header">
        <h1>Select the survey</h1>
      </div>
      <div className="surveys">
      {typeof(surveys)==="object"?surveys.map((e)=>{
        console.log(e)
        return <Surveybox nam={e[.name]}/>
    }):console.log("HEY")}
      </div>

    </div>
  );
};

export default UserLanding;
