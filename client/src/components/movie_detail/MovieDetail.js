
import React from 'react';

import { FaPoop } from "react-icons/fa";


const MovieDetail = ({ movies, selectedMovie, onHomeClick }) => {


    const handleClick = function () {
        onHomeClick();


    }

    const handleFavouriteToggle = (MovieToUpdate) => {
        const updatedMovies = movies.map((movie) => {
            if(movie.title === MovieToUpdate.title){
                movie.favourite = !movie.favourite
            }
            return movie
        })}



    return (

        <div className="movie-detail-container">
            <div className="movie-detail">
                <div className="movie-detail-icon"><FaPoop /></div>
                <h2>{selectedMovie.Title}</h2>
                <img className="movie-detail-poster" src={selectedMovie.Poster} alt="" />
                <div>
                    <p><u>{selectedMovie.Plot}</u></p>
                    <p>Director: {selectedMovie.Director}</p>
                    <p>Cast: {selectedMovie.Actors}</p>
                    <p>Runtime: {selectedMovie.Runtime}</p>
                    <p>IMDb: {selectedMovie.Ratings[0].Value}</p>
                </div>
                {/* add favourite tick box (see UserFavourite.js) */}
                {/* add boxcomment  */}
                <button className="custom-button" onClick={handleClick}>HOME</button>
            </div>
        </div>
    )
}


export default MovieDetail;

