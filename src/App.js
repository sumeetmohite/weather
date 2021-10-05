import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './App.css';
import {fetchWeather} from './api/fetchWeather';
import moment from 'moment';
import FirstRow from './components/FirstRow/FirstRow';
import SecondRow from './components/SecondRow/SecondRow';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    <motion.div className='main-container'>
        <div className="app-container">
            <LeftColumn/>
            <div className="widget-container" >
                <FirstRow query={query} search={search} setQuery={setQuery} />
                <SecondRow weather={weather} date={date}/>
            </div>
            <RightColumn weather={weather} date={date} />
            </div>
    </motion.div>
)
}

export default App;
