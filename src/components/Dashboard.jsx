import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container } from '@mui/material';

const Dashboard = () => {
  const data = [
    { name: 'Jan', value: 30 ,value1: 30 },
    { name: 'Feb', value: 45 ,value1: 65 },
    { name: 'Mar', value: 60 ,value1: 30 },
  ];

  return (
    <Container>
      
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <CartesianGrid strokeDasharray="5 5" stroke="#000" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value1"
          stroke="#ff6347" 
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#1e90ff" 
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
     
    </Container>
  );
};

export default Dashboard;
