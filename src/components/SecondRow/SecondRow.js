import Weather from "../Weather/Weather"
import Loader from "react-loader-spinner";
import moment from 'moment';

const SecondRow = ({weather,date}) => {
  const fiveDays = [];
  const fiveDates = [];
  if(weather.list){
    for(let i=0; i<weather.list.length; i++){
      if((i+1)%8===0){
        fiveDays.push(weather.list[i]);
        let date = moment.unix(weather.list[i].dt).format("ddd, hA");
        fiveDates.push(date);
      }  
    }
  }
  console.log(fiveDates)
  return (
    <div className='second-row'>
      {/* {weather.main && <Weather date={date} weather={weather}/>} */}
      {weather.list && (
        <h4 style={{marginLeft:'1rem', fontSize:'1.2rem'}}>{weather.city.name}</h4>
      )}
        <div className="second-row-data">
        {weather.list && (
          fiveDays.map((e,index) =>
          (
            <div key={index} style={{margin:'1rem', borderRadius:'1rem', padding:'0 0.5rem', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',width:'20%'}}>
              <p>{fiveDates[index]}</p>
              <p>{Math.round(e.main.temp)}<sup>&deg;</sup>C</p>
              <p >{e.weather[0].main}</p>
            </div>
          
          )
          ))}
        </div>
    </div>
  )
}

export default SecondRow
