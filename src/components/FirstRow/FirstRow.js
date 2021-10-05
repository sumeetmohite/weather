import { FaSearch } from 'react-icons/fa';
const FirstRow = ({query,search,setQuery}) => {
  return (
    <div className='first-row'>
      <h2>Good Morning, Ryder</h2>
      <div className="input-wrapper">
        <input type='text' className='search' 
        placeholder='Search city'  
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyPress={search} />
        <FaSearch className="search-icon"/>
      </div>
    </div>
  )
}

export default FirstRow
