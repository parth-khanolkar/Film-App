import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//API key - c63a871e

const API_URL = 'http://www.omdbapi.com?apikey=c63a871e';



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data.Search);

    }

    useEffect(() => {
        searchMovies('Justice League');
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder="Search for movies... " 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="Search" 
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {               /* Movie Cards Displayer Here */

                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((m) => (
                            <MovieCard movie={m}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found.</h2>
                    </div>

                )
            }

            

            
        </div>

    );
}


export default App;