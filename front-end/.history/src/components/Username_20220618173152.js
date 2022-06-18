import React, { useState, useEffect }from 'react';
import { AiOutlineUser } from "react-icons/ai";

const Username = ({setEmail}) => {
  
  return (
    <div className="user">
              <h1 className="icon"><AiOutlineUser /></h1>
              <input type="text" id="username" name="username" onSubmit={(e)=>{
                setEmail(e.target.value)
                console.log(email)
                }}/>
    </div>
  )
}

export default Username;