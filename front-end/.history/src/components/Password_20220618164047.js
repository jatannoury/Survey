import React from 'react'
import { AiOutlineLock } from "react-icons/ai";

const Password = () => {
  const password=document.getElementById("password")
  return (
    <div className="pass">
              <h1 className="icon"><AiOutlineLock/></h1>
              <input type="password" id="password" name="password"/>
    </div>
  )
}

export default Password