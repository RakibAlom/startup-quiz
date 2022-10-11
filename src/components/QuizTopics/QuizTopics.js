import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic/Topic';

const QuizTopics = () => {
  const quizTopics = useLoaderData().data;
  return (
    <>
      <Container>
        <div className='row my-4'>
          {
            quizTopics.map(topic =>
              <div className='col-md-6 col-lg-3'>
                <Topic key={topic.id} topic={topic}></Topic>
              </div>
            )
          }
        </div>
      </Container>
    </>
  );
};

export default QuizTopics;