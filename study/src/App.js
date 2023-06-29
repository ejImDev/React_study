import React, { useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
    const [movies, setMovies] = useState([
        {title : 'im1', year: 2001},
        {title : 'im2', year: 2002},
        {title : 'im3', year: 2003},
        {title : 'im4', year: 2004}
    ]);

    const rederingMovies = movies.map(movie =>{
       return (
           <Movie movie={movie} key={movie.title}/>
       );
    });

    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ]);
    };

    return (
    <div className="App">
        <MovieForm addMovie={addMovie} />
        <br />
        <br />
        {rederingMovies}
    </div>
  );
}

export default App;
