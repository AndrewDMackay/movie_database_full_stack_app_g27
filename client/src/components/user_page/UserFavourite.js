
import React from 'react'

const FavouriteMoviesList = ({Movies, SelectedMovies}) => {
    const filteredMovies = movies.filter((movie) => {
        return movie.favourite
    })

    const listNodes = filteredMovies.map((movie, index) => {
        return (
        <div>
        <img key={index} src={movie.image_url} height="200" alt="" onClick={() => {onSelectedMovie(movie)}}/>
        </div>
        )
    })

    return(
        <>
        <div>
            <h2>Favourite Movies Wall</h2>
                <div className="favourite-movies">
                {listNodes}
                </div>
        </div>
        </>
    )
}

export default FavouriteMoviesList;

