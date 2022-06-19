import React from 'react'

const Surveybox = ({nam}) => {
  const [survey,setSurvey]=React.useState("")
  return (
    <div className="survey_b">
    <h2 onClick={(e)=>{setSurvey(e)
    console.log(survey)}}>{nam}</h2>
  </div>
 
  )
}

export default Surveybox