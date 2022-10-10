import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerImg from '../../images/start-up-quiz-banner.png'

const Home = () => {
  const quizTopics = useLoaderData();
  console.log(quizTopics);
  return (
    <>
      <div className="banner-section py-4">
        <div className="container">
          <div className="banner-img">
            <img className='img-fluid rounded' src={BannerImg} alt="Start-UP Banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;