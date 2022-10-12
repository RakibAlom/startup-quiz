import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <>
      <Container>
        <div className="p-4 shadow my-4 rounded">
          <img className='img-fluid rounded about-img' src="./images/start-up-quiz-banner.png" alt="Start-Up Quiz Banner" />
          <h2 className='py-3'>About Start-Up Quiz</h2>
          <div>

            <p>Our programming startup is a company designed to build, launch, and iterate at an accelerated pace. They are composed of specially-created teams focused on delivering a software product.</p>

            <p>Also, we  provide service to users at an early stage with the expectation of growth. Apps and software giants such as Facebook, Google, and Amazon originated from startups.</p>

            <p>Programming is a discipline that uses codes written in computer languages to instruct computers on how to perform specific tasks. “Programming is the art of writing programs,” according to Professor Gerald Weinberg.</p>

            <p>Whether you want to open your own software development company or create a new application, this field has great potential..</p>

            <p> You are uniquely positioned to start your own business as a programmer, developer, or coder. You can create a company that is not only innovative but also profitable with the skills and knowledge you possess.
            </p>

          </div>
        </div>
      </Container>
    </>
  );
};

export default About;