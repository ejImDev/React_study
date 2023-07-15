import React, { useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import movie from "./components/Movie";

function App() {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
            return movie.id != id;
        }));
    };
    /*filter를 이용하여 삭제 선택한 id가 아닌것만 출력하도록 함*/

    const rederingMovies = movies.length ? movies.map(movie =>{
       return (
           <Movie
               movie={movie}
               key={movie.id}
               removeMovie={removeMovie}
           />
       );
    }) : '추가된 영화가 없습니다.';
    /*DB연동을 사용하지 않았기때문에 임의로 sysdate를 id로 함*/

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
