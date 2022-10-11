import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './QuizQuestion.css'

const QuizQuestion = ({ question }) => {
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelected = (option) => {
    setSelected(option)
  }
  return (
    <>
      <div className="question shadow p-2 p-md-4 px-lg-5 mb-4 rounded">

        <span className='view-icon fs-3' onClick={() => setShowAnswer(!showAnswer)}>
          <FontAwesomeIcon icon={faEye} />
        </span>
        {showAnswer &&
          <Alert className='bg-light text-dark border-0 me-4 shadow-sm' onClose={() => setShowAnswer(false)} dismissible>
            <Alert.Heading className='m-0'>Ans: <span className='text-success'>{question.correctAnswer}</span></Alert.Heading>
          </Alert>
        }

        <div className="quesiton-content py-lg-4">
          <h2 className='pe-5' dangerouslySetInnerHTML={{ __html: question.question }}></h2>

          <div className="quiz-options">
            {
              question.options.map((option, index) =>
                <div onClick={() => handleSelected(option)} className={`option d-flex px-3 py-1 ${selected === option ? "bg-success text-white" : null} bg-light rounded gap-3 align-items-center`} key={index}>
                  <span className='fs-3'><FontAwesomeIcon icon={selected === option ? faSquareCheck : faSquare} /></span>
                  <p className='fs-5 m-0'>{option}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;