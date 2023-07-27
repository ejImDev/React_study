import React, { useState } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
            return movie.id != id;
        }));
    };

    const rederingMovies = movies.length ? movies.map(movie =>{
       return (
           <Movie
               movie={movie}
               key={movie.id}
               removeMovie={removeMovie}
           />
       );
    }) : '추가된 영화가 없습니다.';

    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch> {/*Switch를 사용하면 코드를 내려가면서 가장 먼저 매치되는 Route가 뜸. 따라서 순서가 아주 중요함
                만약 "/"으로 지정된 Route에서 exact옵션을 넣지않았다면 "users" 메뉴를 눌렀을때 "Home"이 떴을것임)*/}
                    <Route path="/movies">
                        <h1>Movie list</h1>
                        <MovieForm addMovie={addMovie} />
                        {rederingMovies}
                    </Route> {/*라우터 밑에서 라우트를 사용할 수 있음. 라우트 하나당 하나의 페이지*/}
                    <Route path="/" exact>
                        {/* Switch를 쓰지않으면 슬래시 단위로 똑같을때 모두 뜸.
                    예를들어 path="/"에서 출력되어야 할 부분이 "/movie"와 "/users"에서도 뜸
                    (슬래시 단위기 때문에 "/user"로 지정해서 user라는 단어가 같더라도 "/users" 에서는 안뜸)
                    또는 exact 옵션을 넣으면 정확히 일치할때만 콘텐츠를 보여줌*/}
                        <h1>Home</h1>
                    </Route>
                    <Route path="/users">
                        <h1>Users</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
