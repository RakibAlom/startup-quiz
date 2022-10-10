import React from 'react';
import Topic from './Topic/Topic';

const QuizTopics = ({ quizTopics }) => {
  return (
    <>
      <div className='row mb-4'>
        {
          quizTopics.map(topic =>
            <div className='col-md-6 col-lg-3'>
              <Topic key={topic.id} topic={topic}></Topic>
            </div>
          )
        }
      </div>
    </>
  );
};

export default QuizTopics;