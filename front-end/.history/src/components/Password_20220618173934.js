import React from 'react'
import { AiOutlineLock } from "react-icons/ai";

const Password = ({setPassword,password}) => {
  return (
    <div className="pass">
              <h1 className="icon"><AiOutlineLock/></h1>
              <input type="text" id="password" name="password" onChange={(e)=>{
                setPassword(e.target.value)
                }}/>
    </div>
  )
}

export default Password