import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
  return (
    <div className="box">
        <h1 className="box-title">{question}</h1>
        {/* {choices.map((e)=>{
            return <Radio/>
        })} */}
      </div>
  )
}

export default Box