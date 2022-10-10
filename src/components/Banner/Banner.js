import React from 'react';
import './Banner.css'
import BannerImg from '../../images/start-up-quiz-banner.png'

const Banner = () => {
  return (
    <>
      <div className="banner-section py-4">
        <div className="banner-img">
          <img className='img-fluid rounded' src={BannerImg} alt="Start-UP Banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;