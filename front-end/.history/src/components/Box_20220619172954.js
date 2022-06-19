import React from 'react'

const Box = ({question,choices}) => {
  return (
    <div className="box">
        <h1 className="box-title">{question}</h1>
        {choices.map((e))}
      </div>
  )
}

export default Box