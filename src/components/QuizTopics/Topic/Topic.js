import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  return (
    <div>
      <Card className='border-0 shadow-sm mb-2'>
        <Card.Body className='border-0 p-2'>
          <div className="topic-img bg-secondary rounded">
            <img className='img-fluid' src={topic.logo} alt={topic.name} />
          </div>
          <div className="topic-info pt-3 pb-1 d-flex justify-content-between align-items-center">
            <h5 className='m-0'>{topic.name}</h5>
            <Link to={`/topics/${topic.id}`}>
              <Button variant='primary' size="sm">
                Start Practice
                <span className='ps-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topic;