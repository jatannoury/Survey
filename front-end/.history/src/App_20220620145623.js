import logo from "./logo.svg";
import Admin from "./components/Admin";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Drop from "./components/Drop";
import Text from "./components/Text";
import Button from "./components/Button";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Surveybox from "./components/Surveybox";
import UserLanding from "./components/UserLanding";
import Survey from "./components/Survey";

function App() {
  return (
    // <Admin/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLanding />}></Route>
        <Route path="/survey_page" element={<Survey />}></Route>
        <Route path="/Admin_login" element={<Admin />}></Route>
        <Route
          path="/Admin_page"
          element={
            <div className="admin_container">
              <div className="header color">
                <h1>Add a new survey</h1>
              </div>
              <div className="admin_box">
                <h2>Add Survey Name</h2>
                <input className="text-input " type="text"></input>
                <h2>Input Number Of Questions</h2>
                <input className="text-input " type="text"></input>
                <div className="admin_box ad">
                  <h2>Add Question Type</h2>
                  <select className="drop admin">
                    <option>dropDown</option>
                    <option>radio</option>
                    <option>checkbox</option>
                    <option>textArea</option>
                  </select>
                  <h2>Add Question</h2>
                  <input className="text-input " type="text"></input>
                  <h2>Add Answer</h2>
                  <input className="text-input marg" type="text"></input>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
