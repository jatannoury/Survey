import React from 'react'
import Radio from './Radio'
const Box = ({question,choices}) => {
    console.log(choices[0])
    const getAns=()=>{
      axios
      .get(`http://127.0.0.1:8000/api/v1/user/get_answer?question_id=${id}`)
      .then((res) => {

        const newItem = {
          question: e["content"],
          answers: res.data.answers,
        };
        answers.push(newItem);
        
      });
    }
  return (
    <div on className="box">
        <h1 className="box-title">{question}</h1>
        {}
      </div>
  )
}

export default Box