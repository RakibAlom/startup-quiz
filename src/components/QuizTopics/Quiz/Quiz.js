import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import { toast } from 'react-toastify';

const Quiz = () => {
  const topicQuiz = useLoaderData().data;
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [correctClick, setCorrectClick] = useState(0);
  const [wrongClick, setWrongClick] = useState(0);

  const handleSelected = (question, option) => {

    setSelected(option)

    if (question.correctAnswer === option) {
      setCorrectClick(correctClick + 1);

      toast.success("Your Answer is Correct !", {
        position: toast.POSITION.TOP_LEFT
      });

    } else {
      setWrongClick(wrongClick + 1);

      toast.error("Sorry, Your Answer is Wrong!", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }
  return (
    <>
      <Container>
        <div className='d-md-flex justify-content-between my-4 text-center shadow-sm py-2 px-2 px-lg-5 rounded'>
          <h2 className='m-0'>{topicQuiz.name} Quiz</h2>
          <div className='d-flex justify-content-center align-items-center gap-4'>
            {/* <span>Score: <strong className='text-primary-color'>{correctClick}</strong></span> */}
            <span>Correct Click: <strong className='text-success'>{correctClick}</strong></span>
            <span>Wrong Click: <strong className='text-danger'>{wrongClick}</strong></span>
          </div>
        </div>
        <div className="quiz-section">
          {
            topicQuiz.questions.map(question =>
              <QuizQuestion
                key={question.id}
                question={question}
                handleSelected={handleSelected}
                selected={selected}
              >
              </QuizQuestion>)
          }
        </div>
      </Container>
    </>
  );
};

export default Quiz;