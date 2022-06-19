import React from "react";
import Surveybox from "./Surveybox";

const UserLanding = () => {
  return (
    <div className="survey_container">
      <div className="header">
        <h1>Select the survey</h1>
      </div>
      <div className="surveys">
        <Surveybox />
      </div>
    </div>
  );
};

export default UserLanding;
