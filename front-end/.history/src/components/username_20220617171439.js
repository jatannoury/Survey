import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
const Username = () => {
  return (
    <div className="user">
              <h1 className="icon"><AiOutlineUser /></h1>
              <input type="text" id="username" name="username" />
    </div>
  )
}

export default Username;