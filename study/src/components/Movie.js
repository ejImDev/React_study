import React from "react";

const Movie = ({ movie }) => {
    /*props로 쓰지않고 {원하는 오브젝트} 이렇게 써도됨*/

    return (
        <div className='movie'>
            <div className='movie-title'>{movie.title}</div>
            <div className='movie-year'>{movie.year}</div>
            {/*구현부에서도 props빼고 바로 movie로 쓸수있음*/}
        </div>
    );

};

export default Movie;