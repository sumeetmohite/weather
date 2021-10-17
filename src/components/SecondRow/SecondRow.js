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
  return (
    <div className='second-row'>
      {/* {weather.main && <Weather date={date} weather={weather}/>} */}
      {weather.list && (
        <h4 style={{fontSize:'1.2rem',color:'#514e4d'}}>{weather.city.name}</h4>
      )}
        <div className="second-row-data">
        {weather.list && (
          fiveDays.map((e,index) =>
          (
            <div key={index} style={{lineHeight:'0.25',background: '#ffffff', borderRadius:'1rem', padding:'0 0.5rem', textAlign: 'center', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',width:'14%'}}>
              <p>{fiveDates[index]}</p>
              <img className='city-icon' src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt={e.weather[0].description} style={{height:'3rem',width:'3rem',}}/>
              <p><strong>{Math.round(e.main.temp)}<sup>&deg;</sup>C</strong></p>
              <p >{e.weather[0].main}</p>
            </div>
          
          )
          ))}
        </div>
    </div>
  )
}

export default SecondRow
