import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container>
        <div className='bg-primary-color py-3 mb-3 rounded'>
          <p className='text-center text-light mb-0'>Copyright &copy; Startup Quiz - Next Programming @ 2022</p>
        </div>
      </Container>
    </>
  );
};

export default Footer;