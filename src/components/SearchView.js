import Hero from "./Hero";
import {Link} from 'react-router-dom';
const SearchView = ({ keyword,searchResults}) => {
    const title=`you are searching for ${keyword} `
    const MovieCards=({movie})=>{

      const imagepathh=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
      const detailUrl=`/movie/${movie.id}`
      return(
      <div className="card" style={{width: '18rem',margin:'20px auto' }}>
        <img src={imagepathh} className="card-img-top" alt={movie.original_title}/>
        <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary">show details</Link>
        </div>
      </div>
      )
    }
    const resultsHTML=searchResults.map((Object,i)=>{
     return <MovieCards movie={Object}/>
    }
    
    )
  return (
    <>
      <Hero text={title} />
      <div class="container">
        <div class="row">  
          {resultsHTML}
          </div></div>
    
      
    </>
  );
};

export default SearchView;


//d6ba78a4a126d7dde1aeededc69dd262
//--url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=d6ba78a4a126d7dde1aeededc69dd262'
//image https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg