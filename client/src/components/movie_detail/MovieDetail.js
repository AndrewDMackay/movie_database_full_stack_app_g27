
import React from 'react';


const MovieDetail = ({ selectedMovie }) => {

    return (

        <div>
            <h2>{selectedMovie.Title}</h2>
            <img src={selectedMovie.Poster} alt=""/>
            <div>
                <p>{selectedMovie.Plot}</p>
                <p>{selectedMovie.Ratings[0].Source}: {selectedMovie.Ratings[0].Value}</p>
            </div>
        </div>
    )
}


export default MovieDetail;

