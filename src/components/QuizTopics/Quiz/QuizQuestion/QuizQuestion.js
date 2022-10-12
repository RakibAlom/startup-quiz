import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizQuestion.css'

const QuizQuestion = ({ question, handleSelected, selected }) => {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="question shadow p-2 p-md-4 px-lg-5 mb-4 rounded">

        <span className='view-icon fs-3' onClick={() => setShowAnswer(!showAnswer)}>
          <FontAwesomeIcon icon={showAnswer ? faEyeSlash : faEye} />
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
                <div onClick={() => handleSelected(question, option)} className={`option d-flex px-3 py-2 ${selected === option ? "bg-primary-color text-white" : "bg-light"} rounded gap-3 align-items-center shadow-sm`} key={index}>
                  <span className='fs-3'><FontAwesomeIcon icon={selected === option ? faSquareCheck : faSquare} /></span>
                  <p className='fs-5 m-0'>{option}</p>
                </div>
              )
            }
          </div>
          <ToastContainer className="toast-notify" />
        </div>
      </div>
    </>
  );
};

export default QuizQuestion;