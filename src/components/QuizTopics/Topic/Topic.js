import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  return (
    <div>
      <Card className='border-0 shadow mb-2'>
        <Card.Body className='border-0 p-3'>
          <h4 className='m-0 pb-2 text-center'>{topic.name}</h4>
          <div className="topic-img bg-primary-color rounded">
            <img className='img-fluid' src={topic.logo} alt={topic.name} />
          </div>
          <div className="pt-3 pb-1">
            <Link to={`/topics/${topic.id}`}>
              <Button className='bg-primary-color border-0 w-100' variant='primary'>
                Start Quiz
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