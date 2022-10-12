import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      <Container>
        <div className="banner-section p-4 shadow-lg rounded my-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>START-UP QUIZ</h1>
              <p>Discover your startup mindset and best work environment using our free online quiz and figure out where you can work. Get immediate feedback that you can share with programming.</p>
            </div>
            <div className="col-md-6">
              <div className="banner-img">
                <img className='img-fluid rounded' src="./images/banner-img.png" alt="Start-UP Banner" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;