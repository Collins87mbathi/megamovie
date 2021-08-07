import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcPrevious, FcNext } from 'react-icons/fc';


const Trending = () => {

    
const [search , setSearch] = useState("");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
   
  const Increment = () => {
    setPage(page + 1);
  }

  const Decrement = () => {
    if(page > 0 ) {
      setPage(page - 1);
    } else if(page < 0) {
      return page  + 1;
    }
   
  }


const fetchTrending = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=04c35731a5ee918f014970082a0088b1&page=${page}`);
    const data = await response.json();
    setTrending(data);
   

}
useEffect(()=>{
   fetchTrending();
},[page]);



    return (
        <>
           <div className="search">
           <input className='inside'  value={search} onChange={(e)=>setSearch(e.target.value)} type = 'text' placeholder='search'/>
           </div>
         
        <div className='movies'>
           {trending.results?.filter((val)=> {
             if(search ==="") {
                 return val;
             }else if(val.title?.toLowerCase().includes(search?.toLowerCase())){
                 return val;
             }
           })?.map((trend)=>{
          
              const {id, title,vote_average, poster_path, vote_count} = trend;
             return (

                <article className='cocktail' key={id}>
                <div className='img-container'>
                  <img src={ "https://image.tmdb.org/t/p/w1280/" + poster_path} alt={title} />
                </div>
                <div className='cocktail-footer'>
                  <h3>{title}</h3>
                  <h4>{vote_average}</h4>
                  <p>{vote_count}</p>
                  <Link to={`/single/${id}`} className='btn btn-primary btn-details'>
                    details
                  </Link>
                </div>
              </article>
               
             )
           })}
        </div>
        
        <div className ="buttonss">
        <button className='previous' onClick={Decrement}><FcPrevious/></button>
            <button className='next' onClick={Increment}><FcNext/></button>
           
        </div>
        </>
    )
}

export default Trending
