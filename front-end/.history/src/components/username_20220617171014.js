import React from 'react'
import "./App.css";
const username = () => {
  return (
    <div className="user">
              <h1 className="icon"><AiOutlineUser /></h1>
              <input type="text" id="username" name="username" />
    </div>
  )
}

export default username