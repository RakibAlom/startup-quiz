import React from 'react';
import './Banner.css'
import BannerImg from '../../images/start-up-quiz-banner.png'
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      <Container>
        <div className="banner-section py-4">
          <div className="banner-img">
            <img className='img-fluid rounded' src={BannerImg} alt="Start-UP Banner" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;