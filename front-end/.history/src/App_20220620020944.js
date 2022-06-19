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
        <Route path="/" element={<UserLanding/>}></Route>
        <Route
          path="/survey_page"
          element={<Survey/>}
        ></Route>
        <Route
      </Routes>
    </BrowserRouter>
  );
}

export default App;
