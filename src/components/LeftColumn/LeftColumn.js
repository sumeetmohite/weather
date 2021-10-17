import { FaHome, FaMapMarkerAlt, FaCloudSunRain } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
const LeftColumn = () => {
  return (
    <div className="left-sidebar">
      <div style={{textAlign:'center'}}>
        <p style={{fontSize:'1.25rem', color:'white', display:'inline-flex'}}><FaCloudSunRain size={30} color="#f7d042"className="lefticons"/><strong>RyderWeather</strong></p>
      </div>
      <div id="toggle-options" style={{marginTop:'2rem'}}>
        <div className="toggle"><FaHome size={20} className="lefticons"/>Dashboard</div>
        <div className="toggle"><GoGraph size={20} className="lefticons"/>Statistics</div>
        <div className="toggle"><FaMapMarkerAlt size={20} className="lefticons"/>Map</div>
        <div className="toggle"><IoSettingsSharp size={20} className="lefticons"/>Settings</div>
      </div>
      <div id="left-bottom">
        <div id="default-weather-card">
          
        </div>
      </div>
    </div>
  )
}

export default LeftColumn
