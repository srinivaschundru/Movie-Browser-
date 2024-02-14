import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
const MovieView = () => {
    const {id}=useParams()
    console.log(id);
    const [movieDetails,setMovieDetails]=useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6ba78a4a126d7dde1aeededc69dd262`)
        .then(Response=>Response.json())
        .then(data=>
         setMovieDetails(data),
         )
    },[id] );
  return (
    <>
      <Hero text={movieDetails.original_title} />
      
    </>
  );
};

export default MovieView;
//https://api.themoviedb.org/3/find/11&api_key=d6ba78a4a126d7dde1aeededc69dd262