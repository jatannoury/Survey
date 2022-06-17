import logo from "./logo.svg";
import Admin  from "./components/Admin";

function App() {
  return (
    // <Admin/>
    <div className="survey_container">
        <div className="header">
          <h1>Survey Name</h1>
        </div>
          <div className="box">
            <h1 className="box-title">Lorem Ipsum dolor sit amend</h1>
            <div style={{}}>
              <input type="radio" className="radio" name="fav_language" value="HTML"></input>
              <h3>Lorem Ipsum dolor sit amend</h3>
            </div>
            
          </div>
        
    </div>
  );
}

export default App;
