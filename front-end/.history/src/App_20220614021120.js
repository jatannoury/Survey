import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='body_container'>
        <div className='content_container'>
          <h1 class="title">Login</h1>
          <hr></hr>
          <hr class=></hr>
          <form>
            <input type="text" id="username" name="username"/><br/>
            <input type="text" id="password" name="password"/><br/>
            <input type="submit" className='submit' value="login"/><br/>
          </form>
        </div>
    </div>
  );
}

export default App;
