import React from 'react';

const QuizQuestion = ({ question }) => {
  return (
    <>
      <div className="shadow p-2 p-md-4 p-lg-5 mb-4">
        <h2 className='text-center'>{question.question}</h2>
        {
          question.options.map((option, index) => <li key={index}>{option}</li>)
        }
      </div>
    </>
  );
};

export default QuizQuestion;