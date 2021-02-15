import React, {useState} from 'react';
import './App.css';
import {fetchWeather} from './api/fetchWeather';

const App = () => {

    const[image, setImage] = useState("https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");

    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState('');

    const search = async(e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            console.log(data);
            if(data.weather[0].main == 'Clear'){
                setImage("https://images.unsplash.com/photo-1523913950023-c47b5ae5b164?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80")
            }
            if(data.weather[0].main == 'Thunderstorm'){
                setImage("https://images.unsplash.com/photo-1529220100082-80957b04a221?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1301&q=80");
            }
            if(data.weather[0].main == 'Drizzle'){
                setImage("https://images.unsplash.com/photo-1556485689-33e55ab56127?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
            }
            if(data.weather[0].main == 'Rain'){
                setImage("https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80");
            }
            if(data.weather[0].main == 'Snow'){
                setImage("https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80");
            }
            if(data.weather[0].main == 'Clouds'){
                setImage("https://images.unsplash.com/photo-1532939198640-a7f0da02b62f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
            }
            
            setQuery('');
        }
    }
    
    return (
        <div className='main-container' style={{backgroundImage:`url(${image})`}}>
            <input type='text' className='search' placeholder='Search city...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
           { weather.main && (
               <div className='city'>
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
                        <p>{weather.weather[0].description}</p>
                    </div>

               </div>
           )
           }
        </div>
    )
}

export default App;
