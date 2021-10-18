import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './App.css';
import {fetchWeather} from './api/fetchWeather';
import FirstRow from './components/FirstRow/FirstRow';
import SecondRow from './components/SecondRow/SecondRow';
import LeftColumn from './components/LeftColumn/LeftColumn';
import ThirdRow from './components/ThirdRow/ThirdRow';
import { fetchImage } from './api/fetchImage';

const App = () => {

const[query, setQuery] = useState('');
const[weather, setWeather] = useState('');
const[images, setImages] = useState([]);

const search = async(e) => {
    if(e.key === 'Enter'){
        const data = await fetchWeather(query);
        setWeather(data);
        const imagedata = await fetchImage(query);
        setImages([...images, {url:imagedata.results[0].urls.small,name:imagedata.results[0].description}])
        console.log(images)
        setQuery('');
    }
}

return (
    <motion.div className='main-container'>
      <div className="app-container">
        <LeftColumn weather={weather}/>
        <div className="right-column">
          <div className="widget-container">
            <FirstRow query={query} search={search} setQuery={setQuery} images={images}/>
            <SecondRow weather={weather}/>
            <ThirdRow weather={weather}/></div> 
        </div>
      </div>
    </motion.div>
)
}

export default App;
