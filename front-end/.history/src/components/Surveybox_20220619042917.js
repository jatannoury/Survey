import React from 'react'
const [survey,setSurvey]=React.useState("")
const Surveybox = ({nam}) => {

  return (
    <div className="survey_b">
    <h2 onClick={(e)=>{setSurvey(this)
    console.log(survey)}}>{nam}</h2>
  </div>
 
  )
}

export default Surveybox