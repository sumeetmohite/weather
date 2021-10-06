import {motion} from 'framer-motion';

const Weather = ({date,weather}) => {
  return (
    <motion.div className='city' animate={{rotateZ:360 }}>
                   <p>{date}</p>
                   <h2 className='city-name'>
                       <span>{weather.name}</span>
                       <sup>{weather.sys.country}</sup>
                   </h2>
                    <div className='city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className='info'>
                        <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                        <p style={{fontSize:"1.25rem"}}>{weather.weather[0].description}</p>
                    </div>
                    <div className='bottom-row'>
                        <div className='bottom-column'>
                            <p>Feels</p>
                            <p>{Math.round(weather.main.feels_like)}&deg;C</p> 
                        </div>
                        <div className='bottom-column'>
                            <p>Wind</p>
                            <p>{Math.round((weather.wind.speed)*(18/5))} km/h</p>
                        </div>
                    </div>

               </motion.div>
  )
}

export default Weather
