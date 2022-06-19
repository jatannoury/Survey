import React from 'react'
import Radio from './Radio'
const Box = ({question,choices,i}) => {
    console.log(choices)
  return (
    <div className="box">
        <h1 className="box-title">{question}</h1>
        {choices=choices[i]
        setTimeout(choices.map((e)=>{
            console.log(e)
            return <Radio />
        }),500)}
      </div>
  )
}

export default Box