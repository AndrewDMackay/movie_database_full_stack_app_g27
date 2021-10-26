import React from 'react'

const FavouriteMoviesList = ({Movies, SelectedMovies}) => {
    const filteredMovies = movies.filter((movie) => {
        return movie.favourite
    })

    const listNodes = filteredMovies.map((movie, index) => {
        return (
        <div>
        <img key={index} src={movie.image_url} height="200" alt="fav-beer-img" onClick={() => {onSelectedBeer(beer)}}/>
        </div>
        )
    })

    return(
        <>
        <div>
            <h2>Favourite Beers Wall</h2>
                <div className="favourite-beers">
                {listNodes}
                </div>
        </div>
        </>
    )
}

export default FavouriteMoviesList;