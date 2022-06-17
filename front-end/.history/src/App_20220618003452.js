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
            <textarea className="textArea" rows="10" cols="100"></textarea>
          </div>
        
    </div>
  );
}

export default App;
