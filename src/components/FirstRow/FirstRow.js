import { FaSearch } from 'react-icons/fa';
const FirstRow = ({query,search,setQuery}) => {
  return (
    <div className='first-row'>
      <div>       
        <input type='text' className='search' 
        placeholder='Search city'  
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyPress={search} />
        {/* <FaSearch className="search-icon"/> */}

        <h2 style={{color:'#514e4d'}}><strong>Weather Forecast</strong></h2>
      </div>
    </div>
  )
}

export default FirstRow
