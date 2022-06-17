import logo from "./logo.svg";
import "./App.css";

import { AiOutlineLock } from "react-icons/ai";
import Username from "./components/Username";
import Password from "./components/Password";

function App() {
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form>
          <Username/>
          <Password/>
          
          <br />
          <input type="submit" className="submit" value="Login" />
          <br />
        </form>
      </div>
    </div>
  );
}

export default App;
