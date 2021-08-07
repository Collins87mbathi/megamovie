import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FcPrevious, FcNext } from 'react-icons/fc';




const Hero = () => {

 
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
   
    const Increment = () => {
      setPage(page + 1);
    }

    const Decrement = () => {
      setPage(page - 1);
    }


    console.log(Increment);
  const [series, setSeries] = useState([]);
const fetchSeries = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`);
    const data = await response.json();
    setSeries(data);
    console.log(data);
   

}
useEffect(()=>{
   fetchSeries();
},[page]);


    return (
        <>
           <div className="search">
           <input className='inside' type = 'text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search'/>
           </div>
         
        <div className='movies'>
           {series.results?.filter((val)=> {
               if(search === "") {
                   return val
               } else if(val.title?.toLowerCase().includes(search?.toLowerCase())) {
                   return val
               }
           })?.map((serie)=>{
          
              const {id,vote_average, poster_path, vote_count,title} = serie;
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

export default Hero

