import logo from './logo.svg';
import './App.css';
import { AiOutlineUser } from "react-icons/ai";

function App() {
  return (
    <div className='body_container'>
        <div className='content_container'>
          <h1 class="title">Login</h1>
          <hr></hr>
          <hr class="hr"></hr>
          <form>
            <div ></div>
            <input type="text" id="username" name="username"/><br/>
            <input type="password" id="password" name="password"/><br/>
            <input type="submit" className='submit' value="Login"/><br/>
          </form>
        </div>
    </div>
  );
}

export default App;
