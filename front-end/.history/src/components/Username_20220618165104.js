import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import React,  from "react";
const Username = () => {
  const [email,setEmail]=useState("")
  return (
    <div className="user">
              <h1 className="icon"><AiOutlineUser /></h1>
              <input type="text" id="username" name="username" onChange={(e)=>setEmail(e.currentTarget.checked)}/>
    </div>
  )
}

export default Username;