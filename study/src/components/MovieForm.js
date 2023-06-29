import React, {useState} from "react";

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addMovie({title: movieTitle, year: movieYear});
        resetForm();
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="영화 제목"
                   value={movieTitle}
                   onChange={e => setMovieTitle(e.target.value)}/>
            <br/>
            <input type="text" placeholder="개봉 연도"
                   value={movieYear}
                   onChange={e => setMovieYear(e.target.value)}/>
            <button type="submit">추가</button>
        </form>
    );
}

export default MovieForm;