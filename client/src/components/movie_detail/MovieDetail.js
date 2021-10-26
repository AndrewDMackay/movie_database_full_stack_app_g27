
import React from 'react';

import { FaPoop } from "react-icons/fa";


const MovieDetail = ({ selectedMovie, onHomeClick }) => {


    const handleClick = function(){
        onHomeClick();


    }

    const handleFavouriteToggle = (MovieToUpdate) => {
        const updatedMovies = movies.map((movie) => {
            if(movie.title === MovieToUpdate.title){
                movie.favourite = !movie.favourite
            }
            return movie
        })



    return (
        
        <div className="movie-detail-container">
            <div className="movie-detail">
                <div className="movie-detail-icon"><FaPoop /></div>
                <h2>{selectedMovie.Title}</h2>
                <img className="movie-detail-poster" src={selectedMovie.Poster} alt=""/>
                <div>
                    <p>{selectedMovie.Plot}</p>
                    <p>{selectedMovie.Ratings[0].Source}: {selectedMovie.Ratings[0].Value}</p>
                </div>
                {/* add favourite tick box (see UserFavourite.js) */}
                {/* add boxcomment  */}
                <button className="custom-button" onClick={handleClick}>HOME</button>
            </div>
        </div>    
    )
}
}

export default MovieDetail;

