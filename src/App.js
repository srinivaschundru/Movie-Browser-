import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/About';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView.js';
import { Routes,Route } from "react-router-dom";
import { useEffect,useState } from 'react';

function App() {
  const [searchResults,setSearchResults]=useState([]);
  const [searchText,setSearchText]=useState('');

  useEffect(()=>{
       console.log(searchText)
       fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=d6ba78a4a126d7dde1aeededc69dd262`)
       .then(Response=>Response.json())
       .then(data=>
        setSearchResults(data.results),
        )
  },[searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults} />}></Route>
        <Route path='/movie/:id' element={<MovieView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
