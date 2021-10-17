import LineChart from "../Chart/LineChart"
import moment from 'moment';
import {useState} from 'react';

const ThirdRow = ({weather}) => {
  const[value,setValue] = useState(5)
  let data = {
    labels: [],
    datasets: [
      {
        label: 'Weather in °C ',
        data: [],
        fill: false,
        backgroundColor: 'yellowgreen',
        borderColor: '#6769DC',
        borderWidth: 2,
        height:20,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            font: {
              family:'Manrope'
            }
          },
        },
      ],
    },
    xAxes:{
      ticks:{
        font:{
          family:'Manrope'
        }
      }
    },
    elements:{
      point:{
        radius:7,
        hoverRadius:10
      }
    },
    plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14,
                        family: 'Manrope',
                        weight: 'bold'
                    }
                }
            },
            tooltip:{
              bodyFont:{
                family:'Manrope'
              },
              titleFont:{
                family:'Manrope'
              }
            },
            
        },
        height:400,
        responsive: true,
        maintainAspectRatio: true,
  };

  if(weather.list){
    if(value===1){
      for(let i=0; i<10; i++){
        let date = moment.unix(weather.list[i].dt).format("ddd, hA");
        data.labels.push(date);
        console.log(Math.floor(weather.list[i].main.temp))
        data.datasets[0].data.push(Math.floor(weather.list[i].main.temp))
      }
    }else if(value===5){
      for(let i=0; i<weather.list.length; i++){
      if((i+1)%value===0){
        let date = moment.unix(weather.list[i].dt).format("ddd, hA");
        data.labels.push(date);
        console.log(Math.floor(weather.list[i].main.temp))
        data.datasets[0].data.push(Math.floor(weather.list[i].main.temp))
        //fiveDates.push(date);
      }  
    }
    }
    
  }
  console.log(data.datasets[0].data)
  
  return (
    <div className='third-row'>
      <h3 style={{fontSize:'1.2rem', color:'#514e4d'}}>Weather Graph</h3>
      <div className='graph-container'>
        <div id="graph-buttons">
          <button className='graph-selector' onClick={()=>setValue(1)}>Day</button>
          <button className='graph-selector' onClick={()=>setValue(5)}>Week</button>
        </div>
        
        <LineChart data={data} options={options}/>

      </div>
    </div>
  )
}

export default ThirdRow
