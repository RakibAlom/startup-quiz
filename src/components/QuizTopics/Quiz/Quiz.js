import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion/QuizQuestion';

const Quiz = () => {
  const topicQuiz = useLoaderData().data;
  return (
    <>
      <Container>
        <h2 className='text-center py-4'>{topicQuiz.name} Quiz</h2>
        <div className="quiz-section">
          {
            topicQuiz.questions.map(question =>
              <QuizQuestion
                key={question.id}
                question={question}
              >
              </QuizQuestion>)
          }
        </div>
      </Container>
    </>
  );
};

export default Quiz;