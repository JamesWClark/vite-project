import { useEffect, useState } from 'react'
import { Auth } from './components/Auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

import './App.css'

function App() {
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const movies = [];
    const querySnapshot = await getDocs(collection(db, 'movies'));
    querySnapshot.forEach((doc) => {
      movies.push(doc.data());
    });
    setMovieList(movies);
  };

  return (
    <div className="App">
      <Auth />

      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p><span className="svg-icon">{movie.hasOscar ? 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 21h22L12 2z"></path>
                <path d="M17 21a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4"></path>
              </svg>
            : ""}</span>Released: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
