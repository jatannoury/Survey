import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
    console.log(choices[0])
  return (
    <div className="box">
        <h1 onLoad={(e)=>{
            console.log(e.v)
        }} className="box-title">{question}</h1>
        
      </div>
  )
}

export default Box