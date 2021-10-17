import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.font.family = 'Manrope';

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