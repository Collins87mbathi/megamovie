import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



const Singlemovie = () => {
   const  [serie, setSerie] = useState([]);
const { id } = useParams();

const fetchMov = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`);
    const data = await response.json();
    setSerie(data);
    console.log(data);
}

useEffect(()=> {
fetchMov();
},[id]);

const { title,overview,poster_path,production_companies} = serie;
    return (
      <div className="singlecontainer">
          <img className="singleimg" src={"https://image.tmdb.org/t/p/w1280/" + poster_path} alt={title}/>
          <h4 className="singletopic">{title}</h4>
          <p className="paragragh">{overview}</p>
              <h4 className="singletitle">Production Companies</h4>
              {production_companies?.map((compa)=>{
            const {id,logo_path,name} = compa;
            return (
              <div className="companies" key={id}>
                <img className="logocompany"src={  "https://image.tmdb.org/t/p/w1280/" + logo_path} />
                <p>{name}</p>
              </div>
            )
              })}
        
      </div>
    )
}

export default Singlemovie

//343611