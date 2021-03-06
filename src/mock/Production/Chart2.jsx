import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Dashboard/Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('07:00', 3),
  createData('08:00', 2),
  createData('09:00', 4),
  createData('10:00', 3),
  createData('11:00', 2),
  createData('12:00', 4),
  createData('13:00', 4),
  createData('14:00', 3),
  createData('15:00', 4),
  createData('16:00', 3),
];

export default function Chart2(props) {
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Load Count
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}