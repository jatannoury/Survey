import React, { useState, useEffect }from 'react';
import { AiOutlineUser } from "react-icons/ai";

const Username = ({setEmail}) => {
  
  return (
    <div className="user">
              <h1 className="icon"><AiOutlineUser /></h1>
              <input type="text" id="username" name="username" onChange={(e)=>{
                setEmail(e.target.value)
                conso
                }}/>
    </div>
  )
}

export default Username;