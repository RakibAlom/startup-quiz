import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './QuizQuestion.css'

const QuizQuestion = ({ question }) => {
  return (
    <>
      <div className="shadow p-2 p-md-4 p-lg-5 mb-4 question">
        <h2 className='text-center'>{question.question}</h2>
        <div className="quiz-options">
          {
            question.options.map((option, index) =>
              <div className="option d-flex px-3 bg-light rounded gap-3 align-items-center">
                <span className='fs-3'><FontAwesomeIcon icon={faSquare} /></span>
                <p className='fs-5 m-0'>{option}</p>
              </div>
            )
          }
        </div>

        <span className='view-icon fs-3'>
          <FontAwesomeIcon icon={faEye} />
        </span>

      </div>
    </>
  );
};

export default QuizQuestion;