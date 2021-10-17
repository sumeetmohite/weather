import { FaSearch } from 'react-icons/fa';
const FirstRow = ({query,search,setQuery,images}) => {
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
        <div id="image-list">
          {images && (images.map((image,index) => (
          <div key={index}><img src={image} alt="" height="100" width="100" style={{borderRadius:'0.5rem',marginRight:'1rem'}} /></div>
        )))}
        </div>
      </div>
    </div>
  )
}

export default FirstRow
