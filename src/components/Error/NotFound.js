import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <Container>
        <div className="not-found-section p-4 shadow d-flex align-items-center my-4 mx-auto">
          <div className='text-center w-100'>
            <h2><span className='text-danger fw-bold'>404</span> Not Found</h2>
            <div className='nav-section'>
              <Link to="/">Home</Link>
              <Link to="/topics">Quiz Topics</Link>
              <Link to="/statistics">Statistics</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;