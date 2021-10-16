import { FaSearch } from 'react-icons/fa';
const FirstRow = ({query,search,setQuery}) => {
  return (
    <div className='first-row'>
      <div style={{padding: '2rem'}}>       
        <input type='text' className='search' 
        placeholder='Search city'  
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyPress={search} />
        {/* <FaSearch className="search-icon"/> */}

        <h2><strong>Weather Forecast</strong></h2>
      </div>
    </div>
  )
}

export default FirstRow
