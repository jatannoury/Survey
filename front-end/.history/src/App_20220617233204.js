import logo from "./logo.svg";
import Admin  from "./components/Admin";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    // <Admin/>
    <div className="survey_container">
        <div className="header">
          <h1>Survey Name</h1>
        </div>
          <div className="box">
            <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
            <select className="drop">
            <input type="checkbox" className="checkbox" name="fav_language" value="HTML"></input>
            </select>
          </div>
        
    </div>
  );
}

export default App;
