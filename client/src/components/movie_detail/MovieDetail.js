
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { FaPoop } from "react-icons/fa";


const MovieDetail = ({ selectedMovie, onHomeClick }) => {


    const handleClick = function(){
        onHomeClick();
    }

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
                <button className="custom-button" onClick={handleClick}>HOME</button>
            </div>
        </div>    
    )
}


export default MovieDetail;

