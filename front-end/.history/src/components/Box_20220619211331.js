import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
    console.log(choices[0])
  return (
    <div on className="box">
        <h1  onChange={(e)=>{
          console.log(e.t)
        }} className="box-title">{question}</h1>
        
      </div>
  )
}

export default Box