import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import { toast } from 'react-toastify';

const Quiz = () => {
  const topicQuiz = useLoaderData().data;
  const [selected, setSelected] = useState("");
  // const [correctScore, setCorrectScore] = useState(0);
  // const [wrongScore, setWrongScore] = useState(0);

  const handleToQuizSelect = (question, option) => {

    setSelected(option)

    if (question.correctAnswer === option) {

      // setCorrectScore(correctScore + 1);
      toast.success("Your Answer is Correct !", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
    } else {

      // setWrongScore(wrongScore + 1);
      toast.error("Sorry, Your Answer is Wrong!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
    }

  }

  return (
    <>
      <Container>
        <div className='my-4 text-center shadow-sm py-2 px-2 px-lg-5 rounded'>
          <h2 className='m-0'>{topicQuiz.name} Quiz</h2>
          {/* <div className='d-flex justify-content-center align-items-center gap-4'>
            <span>Correct: <strong className='text-success'>{correctScore}</strong></span>
            <span>Wrong: <strong className='text-danger'>{wrongScore}</strong></span>
          </div> */}
        </div>
        <div className="quiz-section">
          {
            topicQuiz.questions.map((question, index) =>
              <QuizQuestion
                key={question.id}
                question={question}
                handleToQuizSelect={handleToQuizSelect}
                selected={selected}
                count={index + 1}
              >
              </QuizQuestion>)
          }
        </div>
      </Container>
    </>
  );
};

export default Quiz;