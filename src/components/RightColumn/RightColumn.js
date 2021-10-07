import { RiH3 } from "react-icons/ri"

const RightColumn = ({weather,date}) => {
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

  return (
    <div className="right-sidebar">
      {/* <h2>Weekly weather</h2>
      {weather.main && (days.map((day,id) => (
         <div style={{lineHeight:'1'}} key={id}>
          <h5>{day}</h5>
          <h3>{weather.weather[0].description}</h3>
         </div>
      )))} */}
      {weather && (
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
      )}
      
    </div>
  )
}

export default RightColumn
