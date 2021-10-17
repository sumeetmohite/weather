import { FaHome, FaMapMarkerAlt, FaCloudSunRain } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
import {motion} from 'framer-motion';

const LeftColumn = ({weather}) => {
  return (
    <div className="left-sidebar">
      <div style={{textAlign:'center'}}>
        <p style={{fontSize:'1.25rem', color:'white', display:'inline-flex'}}><FaCloudSunRain size={30} color="#f7d042"className="lefticons"/><strong>RyderWeather</strong></p>
        <div id="toggle-options" style={{marginTop:'2rem'}}>
          <div className="toggle"><FaHome size={20} className="lefticons"/>Dashboard</div>
          <div className="toggle"><GoGraph size={20} className="lefticons"/>Statistics</div>
          <div className="toggle"><FaMapMarkerAlt size={20} className="lefticons"/>Map</div>
          <div className="toggle"><IoSettingsSharp size={20} className="lefticons"/>Settings</div>
        </div>
      </div>
      <div id="left-bottom">
        {weather.list && (
          <>
          <motion.div id="default-weather-card" animate={{rotateZ:360 }}>
          {/* <p>{date}</p> */}
          <h2 className='city-name'>
            <span><strong>{weather.city.name}</strong></span>
            <sup>{weather.city.country}</sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.list[0].main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className='info'>
            <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} alt={weather.list[0].weather[0].description}/>
            <p>{weather.list[0].weather[0].description}</p>
          </div>
          <div className='bottom-row'>
            <div className='bottom-column'>
              <p>Feels</p>
              <p>{Math.round(weather.list[0].main.feels_like)}&deg;C</p> 
            </div>
            <div className='bottom-column'>
              <p>Wind</p>
              <p>{Math.round((weather.list[0].wind.speed)*(18/5))} km/h</p>
            </div>
          </div>
        </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default LeftColumn
