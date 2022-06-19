import React from "react";
import Surveybox from "./Surveybox";
async function fetchSurveys() {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/admin/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body:{},
    });
    const data = await res.json();
    console.log(data);
    if (data["access_token"]){
      localStorage.setItem("access_token",data["access_token"]);
      console.log("HEY")
      window.location.href="/Admin_page"
    }
    else{
      alert("Wrong username or password")
    }
    return data;
  }
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
