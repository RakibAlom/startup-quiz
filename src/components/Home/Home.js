import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizTopics from '../QuizTopics/QuizTopics';

const Home = () => {
  const quizTopics = useLoaderData().data;
  console.log(quizTopics);
  return (
    <>
      <Container>
        <Banner></Banner>
        <QuizTopics quizTopics={quizTopics}></QuizTopics>
      </Container>
    </>
  );
};

export default Home;