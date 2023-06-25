import React, { useState, useEffect } from "react";

function App() {
    const movies = [
        {title : 'im1', year: 2001},
        {title : 'im2', year: 2002},
        {title : 'im3', year: 2003},
        {title : 'im4', year: 2004},
    ];
    /*배열에 담아서 데이터를 표시함*/

    const renderMovies = movies.map(movie => {
       return (
           <div className='movie' key={movie.title}>
               <div className='movie-title'>{movie.title}</div>
               <div className='movie-year'>{movie.year}</div>
           </div>
       );
    });
    /*
    map : array의 원소를 가져와서 array의 아이템 하나하나를 원하는 형식으로 변환 가능
    위에서는 movie라는 이름으로 각 객체를 받아서 그안의 각 데이터를 출력하는 형식으로 구현함
    각 객체의 유니크 key(보통은 인덱스번호)를 넣어주지 않으면 Warning: Each child in a list should have a unique "key" prop. 라는 오류가 뱉어짐
    */

    return (
    <div className="App">
        <h1>list</h1>
        {/*<div className='movie'>
            <div className='movie-title'>{movies[0].title}</div>
            <div className='movie-year'>{movies[0].year}</div>
        </div>
        <div className='movie'>
            <div className='movie-title'>{movies[1].title}</div>
            <div className='movie-year'>{movies[1].year}</div>
        </div>
        <div className='movie'>
            <div className='movie-title'>{movies[2].title}</div>
            <div className='movie-year'>{movies[2].year}</div>
        </div>*/}
        {/* 반복문을 사용하지 않고 하드코딩 했을 때 */}

        {renderMovies}
        {/* 반복문 리턴을 받아서 출력 했을 때 */}
    </div>
  );
}

export default App;
