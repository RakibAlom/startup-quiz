import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';
import './QuizTopics.css'

const QuizTopics = () => {
  const quizTopics = useLoaderData().data;
  return (
    <>
      <Container>
        <div className="quiz-topics">
          <h2 className='mt-4 text-center shadow py-3 rounded'>Quiz Topics</h2>
          <div className='row my-4'>
            {
              quizTopics.map(topic =>
                <div className='col-lg-6 col-xl-3' key={topic.id}>
                  <Topic topic={topic}></Topic>
                </div>
              )
            }
          </div>
        </div>
      </Container>
    </>
  );
};

export default QuizTopics;