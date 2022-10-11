import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './QuizQuestion.css'

const QuizQuestion = ({ question }) => {
  const [selected, setSelected] = useState("");
  // const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const handleSelected = (question, option) => {
    setSelected(option)
  }

  const showCorrectAnswer = () => {
    setCorrectAnswer(!correctAnswer);
  }

  return (
    <>
      <div className="shadow p-2 p-md-4 p-lg-5 mb-4 question">

        <h2 className='text-center px-3' dangerouslySetInnerHTML={{ __html: question.question }}></h2>

        <div className="quiz-options">
          {
            question.options.map((option, index) =>
              <div onClick={() => handleSelected(question, option)} className={`option d-flex px-3 py-1 ${selected === option ? "bg-success text-white" : "bg-light"} rounded gap-3 align-items-center`} key={index}>
                <span className='fs-3'><FontAwesomeIcon icon={selected === option ? faSquareCheck : faSquare} /></span>
                <p className='fs-5 m-0'>{option}</p>
              </div>
            )
          }
        </div>

        <span className='view-icon fs-3' onClick={() => showCorrectAnswer()}>
          <FontAwesomeIcon icon={faEye} />
        </span>

      </div>
    </>
  );
};

export default QuizQuestion;