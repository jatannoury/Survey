import React from 'react'
import "../App.css";
import Username from "../components/Username";
import Password from "../components/Password";

const Admin = () => {
  const pass=document.getElementById("")
  return (
    <div className="body_container">
      <div className="content_container">
        <h1 class="title">Login</h1>
        <hr></hr>
        <hr class="hr"></hr>
        <form>
        <Username/>
        <Password/>
        <input type="submit" className="submit" value="Login" onClick={()=>{
          console.log()
        }}/>
          <br />
        </form>
      </div>
    </div>
  )
}

export default Admin