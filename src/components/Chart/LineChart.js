import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({data,options}) => (
  <>
    <div className='header'>
      <div className='links'>
      </div>
    </div>
    <Line data={data} options={options} height={50} />
  </>
);

export default LineChart;