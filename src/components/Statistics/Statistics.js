import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  return (
    <>
      <Container>
        <div className='my-4 p-2 p-md-4 shadow rounded'>
          <h2>Quiz Statistics</h2>
        </div>
      </Container>
    </>
  );
};

export default Statistics;