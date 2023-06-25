import React from "react";
import Movie from "./components/Movie";

function App() {
    const movies = [
        {title : 'im1', year: 2001},
        {title : 'im2', year: 2002},
        {title : 'im3', year: 2003},
        {title : 'im4', year: 2004}
    ];

    const rederingMovies = movies.map(movie =>{
       return (
           <Movie movie={movie} key={movie.title}/>
           /*key는 컴포넌트 호출할때 직접 지정*/
       );
    });

    return (
    <div className="App">
        {rederingMovies}
    </div>
  );
}

export default App;
