import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizQuestion.css'

const QuizQuestion = ({ question, handleToQuizSelect, count, selected }) => {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="question shadow p-3 p-md-4 px-lg-5 mb-4 rounded">

        <span className='view-icon fs-3' onClick={() => setShowAnswer(!showAnswer)}>
          <FontAwesomeIcon icon={showAnswer ? faEyeSlash : faEye} />
        </span>
        {showAnswer &&
          <Alert className='bg-light text-dark border-0 me-4 shadow' onClose={() => setShowAnswer(false)} dismissible>
            <Alert.Heading className='m-0'>Ans: <span className='text-success'>{question.correctAnswer}</span></Alert.Heading>
          </Alert>
        }

        <div className="quesiton-content py-lg-4">
          <h2 className='pe-5'>Quiz {count}: {question.question.replace(/(<([^>]+)>)/ig, '')}</h2>
          <div className="quiz-options">
            {
              question.options.map((option, index) =>
                <button onClick={() => handleToQuizSelect(question, option)} className={`option border-0 d-flex px-3 py-2 rounded gap-3 align-items-center shadow-sm ${selected === option ? "bg-primary-color text-white" : "bg-light"}`} key={index}>
                  <span className='fs-3'><FontAwesomeIcon icon={selected === option ? faSquareCheck : faSquare} /></span>
                  <p className='fs-5 m-0'>{option}</p>
                </button>
              )
            }
          </div>
          <ToastContainer className="toast-notify" autoClose={3000} />
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;