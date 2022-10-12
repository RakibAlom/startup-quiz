import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';


const Statistics = () => {
  const quizTopics = useLoaderData().data;
  return (
    <>
      <Container>
        <div className="statistics-chart p-4 p-lg-5 my-4 shadow">
          <h2 className='pb-3 ps-5'>Quiz Statistics Chart</h2>
          <LineChart
            width={500}
            height={400}
            data={quizTopics}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
        </div>
      </Container>
    </>
  );
};

export default Statistics;