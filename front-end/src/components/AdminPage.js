import React from "react";
import SurveyB from "./SurveyB";
const AdminPage = () => {
  return (
    <div className="admin_container">
      <div className="header color">
        <h1>Add a new survey</h1>
      </div>
      <SurveyB />
    </div>
  );
};

export default AdminPage;
