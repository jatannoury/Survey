import logo from "./logo.svg";
import Admin  from "./components/Admin";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Drop from "./components/Drop";
import Text from "./components/Text";
import Button from "./components/Button";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [email,setEmail]=useState("")
  const [email,setEmail]=useState("")
  return (
    // <Admin/>
    // <div className="survey_container">
    //     <div className="header">
    //       <h1>Survey Name</h1>
    //     </div>
    //     <div className="box">
    //       <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
    //       <Text/>
    //     </div>
    //     {/* enter here */}
    // </div>
   
    <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              <Admin/>
              
            }
        ></Route>
        </Routes>
    </BrowserRouter>
    

    
  );
}

export default App;
