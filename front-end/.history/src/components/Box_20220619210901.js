import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
    console.log(choices[0])
  return (
    <div onLoad={(e)=>{e.i}} className="box">
        <h1  className="box-title">{question}</h1>
        
      </div>
  )
}

export default Box