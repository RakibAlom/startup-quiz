import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  return (
    <div>
      <Card className='border-0 shadow-sm mb-2'>
        <Card.Body className='border-0 p-3'>
          <div className="topic-img bg-primary-color rounded">
            <img className='img-fluid' src={topic.logo} alt={topic.name} />
          </div>
          <div className="topic-info pt-3 pb-1 d-flex justify-content-between align-items-center">
            <h5 className='m-0'>{topic.name}</h5>
            <Link to={`/topics/${topic.id}`}>
              <Button className='bg-primary-color border-0' variant='primary'>
                Start Practice
                <span className='ps-2'>
                  <FontAwesomeIcon icon={faArrowRight} />
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