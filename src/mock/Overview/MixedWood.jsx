import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Dashboard/Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('07:00', 0),
  createData('08:00', 24.6),
  createData('09:00', 8.5),
  createData('10:00', 0),
  createData('11:00', 29.6),
  createData('12:00', 0),
  createData('13:00', 42.45),
  createData('14:00', 28.56),
  createData('15:00', 11.68),
  createData('16:00', 0),
];

export default function MixedWood(props) {
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
            Tons
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}