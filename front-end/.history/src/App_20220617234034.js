import logo from "./logo.svg";
import Admin  from "./components/Admin";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Drop from "./components/Drop";

function App() {
  return (
    // <Admin/>
    <div className="survey_container">
        <div className="header">
          <h1>Survey Name</h1>
        </div>
          <div className="box">
            <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
          </div>
        
    </div>
  );
}

export default App;
