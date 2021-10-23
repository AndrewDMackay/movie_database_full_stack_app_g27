import React, {useState, useEffect} from 'react'

const MovieContainer = () => {
    const [movies, setMovies] = useState([])

    // searches API by movie title
    const getMoviesByTitle = function(movieTitle){

        fetch(`http://www.omdbapi.com/?t=${movieTitle}apikey=30f7090a`)
        .then(res => res.json())
        .then(movies => setMovies(movies))
    }

    // const getMoviesByGenre = function(genre){

    //     fetch(`http://www.omdbapi.com/?t=${genre}apikey=30f7090a`)
    //     .then(res => res.json())
    //     .then(movies => setMovies(movies))
    // }

    const onUserReviewSubmit = (review) => {
        postUserReview(review)
    }

    const onUserReviewDelete = (id) => {
        deleteUserReview(id)
    }

    return(
        <>
        <h1>RateMyPoo.com</h1>

        </>
    )
} 

export default MovieContainer;