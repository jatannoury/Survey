import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
    console.log(choices)
  return (
    <div className="box">
        <h1 className="box-title">{question}</h1>
        {choices.map((e)=>{
            return <Radio element/>
        })}
      </div>
  )
}

export default Box