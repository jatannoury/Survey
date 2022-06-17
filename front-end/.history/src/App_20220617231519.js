import logo from "./logo.svg";
import Admin  from "./components/Admin";
import Radio from "./components/Radio";

function App() {
  return (
    // <Admin/>
    <div className="survey_container">
        <div className="header">
          <h1>Survey Name</h1>
        </div>
          <div className="box">
            <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
            <div className="flex">
              <input type="radio" className="radio" name="fav_language" value="HTML"></input>
              <h3>Lorem Ipsum dolor sit amend</h3>
            </div>
            <input type="checkbox" className="checkbox" name="vehicle3" value="Boat"></input>
          </div>
        
    </div>
  );
}

export default App;
