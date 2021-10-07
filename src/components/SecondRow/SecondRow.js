import Weather from "../Weather/Weather"
import Loader from "react-loader-spinner";

const SecondRow = ({weather,date}) => {
  return (
    <div className='second-row'>
      {weather.main && <Weather date={date} weather={weather}/>}
    </div>
  )
}

export default SecondRow
