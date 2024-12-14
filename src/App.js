import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  const athleteData = [
    { sprint: 'Sprint 1', time: 5.71, professional: 5.5 },
    { sprint: 'Sprint 2', time: 5.78, professional: 5.6 },
    { sprint: 'Sprint 3', time: 5.8, professional: 5.7 },
    { sprint: 'Sprint 4', time: 5.84, professional: 5.8 },
    { sprint: 'Sprint 5', time: 5.88, professional: 5.9 },
    { sprint: 'Sprint 6', time: 5.95, professional: 6.0 }
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <h2 style={{ textAlign: 'center' }}>40m Sprint Performance Comparison</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={athleteData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sprint" />
          <YAxis domain={[5.4, 6.1]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{ r: 8 }} name="Your Sprints" />
          <Line type="monotone" dataKey="professional" stroke="#82ca9d" name="Professional Average" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;