import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                  <FontAwesomeIcon icon={faCircleArrowRight} />
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