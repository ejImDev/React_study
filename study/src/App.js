import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

function App() {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [movies, setMovies] = useState([
        {title : 'im1', year: 2001},
        {title : 'im2', year: 2002},
        {title : 'im3', year: 2003},
        {title : 'im4', year: 2004}
    ]); /*status로 변경*/

    /*const movies = [
        {title : 'im1', year: 2001},
        {title : 'im2', year: 2002},
        {title : 'im3', year: 2003},
        {title : 'im4', year: 2004}
    ];*/
    /*기존의 배열만 있을때는 status가 아니기때문에 변경되더라도 컴포넌트가 리렌더링 되지 않음*/

    const rederingMovies = movies.map(movie =>{
       return (
           <Movie movie={movie} key={movie.title}/>
       );
    });

    const addMovie = (event) => {
        event.preventDefault();
        /*상기 이벤트를 넣어야 submit시에 페이지 리로딩이 안됨*/

        setMovies([
            ...movies,{
                title : movieTitle,
                year: movieYear
        }]);
        /* ...A = A에 이미 담겨진 기존 원소들을 가지고 옴
        * 위에서 ...movies를 하지 않을시 추가가 아닌 덮어쓰기의 형식이 되는 것 */

        setMovieTitle('');
        setMovieYear('')
        /*등록 후에 input창 초기화*/
    };

    return (
    <div className="App">
        <form onSubmit={addMovie}>
            <input type="text" placeholder="영화 제목"
                value={movieTitle}
                onChange={e => setMovieTitle(e.target.value)}/>
            <br />
            <input type="text" placeholder="개봉 연도"
                value={movieYear}
                onChange={e => setMovieYear(e.target.value)}/>
            <button type="submit">추가</button>
        </form>
        <br />
        <br />
        {rederingMovies}
    </div>
  );
}

export default App;
