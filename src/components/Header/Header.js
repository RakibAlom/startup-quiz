import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Navbar className='px-3 rounded mt-3 bg-primary-color' expand="lg" variant="dark">
          <NavLink to="/" className="navbar-brand">
            <img src="./logo.png" alt="START-UP QUIZ" />
          </NavLink>
          <Navbar.Toggle className='outline-none shadow-none' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/topics">Topics</NavLink>
              <NavLink className="nav-link" to="/statistics">Statistics</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;