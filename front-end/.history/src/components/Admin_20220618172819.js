import React,{useState} from 'react'
import "../App.css";
import Username from "../components/Username";
import Password from "../components/Password";

const Admin = () => {
  const [email,setEmail]=useState("")
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form>
        <Username setEmail={setEmail}/>
        <Password/>
        <input type="submit" className="submit" value="Login" />
          <br />
        </form>
      </div>
    </div>
  )
}

export default Admin