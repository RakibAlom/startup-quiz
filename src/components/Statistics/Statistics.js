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
        <div className="statistics-chart py-4 px-3 p-lg-5 my-4 shadow">

          <h2 className='pb-3'>Quiz Statistics Chart</h2>
          <ResponsiveContainer width="100%" height={400} className="rechart">
            <LineChart
              width={400}
              height={300}
              data={quizTopics}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

        </div>
      </Container>
    </>
  );
};

export default Statistics;