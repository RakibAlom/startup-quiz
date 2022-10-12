import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion/QuizQuestion';

const Quiz = () => {
  const topicQuiz = useLoaderData().data;
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);

  return (
    <>
      <Container>
        <div className='d-flex justify-content-between align-items-center my-4 text-center shadow-sm py-2 px-2 px-lg-5 rounded'>
          <h2 className='m-0'>{topicQuiz.name} Quiz</h2>
          <div className='d-flex justify-content-center align-items-center gap-4'>
            <span>Correct: <strong className='text-success'>{correctScore}</strong></span>
            <span>Wrong: <strong className='text-danger'>{wrongScore}</strong></span>
          </div>
        </div>
        <div className="quiz-section">
          {
            topicQuiz.questions.map((question, index) =>
              <QuizQuestion
                key={question.id}
                question={question}
                count={index + 1}
                correctScore={correctScore}
                setCorrectScore={setCorrectScore}
                wrongScore={wrongScore}
                setWrongScore={setWrongScore}
              >
              </QuizQuestion>)
          }
        </div>
      </Container>
    </>
  );
};

export default Quiz;