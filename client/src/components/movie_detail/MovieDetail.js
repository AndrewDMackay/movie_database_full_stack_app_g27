
import React from 'react';
import MovieReviewList from './MovieReviewList';

// import ReactPlayer from 'react'
import ReactPlayer from 'react-player/youtube';

import { FaPoop } from "react-icons/fa";



const MovieDetail = ({ movies, selectedMovie, onHomeClick, loggedIn, allUsers, youtubeVideo }) => {


    const handleClick = function () {
        onHomeClick();

    }


    return (

        <div className="movie-detail-container">
            <div className="movie-detail">
                <div className="movie-detail-icon"><FaPoop /></div>
                <h2>{selectedMovie.Title}</h2>
                <img className="movie-detail-poster" src={selectedMovie.Poster} alt="" />
                <div>
                    <hr/>
                    <h5>PLOT</h5>
                    <p>{selectedMovie.Plot}</p>
                    <hr/>
                    <h6>DIRECTOR</h6>
                    <p>{selectedMovie.Director}</p>
                    <h6>CAST</h6>
                    <p>{selectedMovie.Actors}</p>
                    <hr/>
                    <h6>RUNTIME</h6>
                    <p>{selectedMovie.Runtime}</p>
                    <h6>IMDB</h6>
                    <p>{selectedMovie.Ratings[0].Value}</p>
                    <hr/>
                </div>
                <button className="custom-button" onClick={handleClick}>HOME</button>
            </div>
            <div className="trailer-container">
                <h3>TRAILER</h3>
                <div className="trailer-contents">
                <ReactPlayer className="trailer-player" url={youtubeVideo} />
                </div>
            </div>
            <div>
                <MovieReviewList selectedMovie={selectedMovie} loggedIn={loggedIn} allUsers={allUsers} />
            </div>
        </div>
    )
}

export default MovieDetail;

