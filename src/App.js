import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './App.css';
import {fetchWeather} from './api/fetchWeather';
import moment from 'moment';

const App = () => {

    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState('');
    const[date, setDate] = useState('');
    const[cardBg, setCardBg] = useState('');


    const search = async(e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            console.log(data);
            let now = moment(data.dt*1000).format('MMMM Do YYYY, h:mm a');
            setDate(now)
            let time = new Date(data.dt*1000)
            time = time.getHours();
            console.log(time)

            if(data.weather[0].main == 'Clear'){
                setCardBg('linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)')
            }
            if(data.weather[0].main == 'Thunderstorm'){
                setCardBg('linear-gradient(to right, #659999, #f4791f)')
            }
            if(data.weather[0].main == 'Drizzle'){
                setCardBg('linear-gradient(to right, #2c3e50, #3498db)')
            }
            if(data.weather[0].main == 'Rain'){
               setCardBg('linear-gradient(to right, #1a2980, #26d0ce)')
            }
            if(data.weather[0].main == 'Snow'){
                setCardBg('linear-gradient(to right, #403b4a, #e7e9bb)')
            }
            if(data.weather[0].main == 'Clouds'){
                setCardBg('linear-gradient(to right, #bdc3c7, #2c3e50)')
            }
            
            setQuery('');
        }
    }
    
    return (
        <motion.div className='main-container' style={{background:`${cardBg}`}}
            
        >
            <div className="widget-container" >
                <input type='text' className='search' placeholder='Search city...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
           { weather.main && (
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
                            <p>{Math.round(weather.main.feels_like)}<sup>&deg;c</sup></p> 
                        </div>
                        <div className='bottom-column'>
                            <p>Wind</p>
                            <p>{Math.round((weather.wind.speed)*(18/5))} km/h</p>
                        </div>
                    </div>

               </motion.div>
           )
           }
            </div>
        </motion.div>
    )
}

export default App;
