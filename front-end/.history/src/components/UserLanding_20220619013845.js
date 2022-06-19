import React from "react";
import Surveybox from "./Surveybox";

const [surveys,setSurveys]=React.useState("")
React.useEffect(()=>{

},[])
const UserLanding = () => {
    
  return (
    <div className="survey_container">
      <div className="header">
        <h1>Select the survey</h1>
      </div>
      <div className="surveys">
     {(async () => {
    let surveys = await fetchSurveys()

    surveys.map((e)=>{
        return <Surveybox/>
    })
  })()}
       
      </div>
    </div>
  );
};

export default UserLanding;
