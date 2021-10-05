import { RiH3 } from "react-icons/ri"

const RightColumn = ({weather,date}) => {
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  
  return (
    <div className="right-sidebar">
      <h2>Weekly weather</h2>
      {weather.main && (days.map((day,id) => (
         <div style={{lineHeight:'1'}} key={id}>
          <h5>{day}</h5>
          <h3>{weather.weather[0].description}</h3>
         </div>
      )))}
    </div>
  )
}

export default RightColumn
