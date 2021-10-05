import Weather from "../Weather/Weather"


const SecondRow = ({weather,date}) => {
  return (
    <div className='second-row'>
      { weather.main && (
          <Weather date={date} weather={weather}/>
      )
      }
    </div>
  )
}

export default SecondRow
