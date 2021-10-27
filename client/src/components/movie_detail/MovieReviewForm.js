
import React, { useState } from 'react'


const MovieReviewForm = ({loggedIn, selectedMovie, onNewReviewSubmit}) => {

const [comment, setComment] = useState("")
const [score, setScore] = useState("")


const handleCommentChange = (event) => {
    setComment(event.target.value)
}


const handleScoreChange = (event) => {
    setScore(event.target.value)
}


const handleSubmit = (event) => {
    event.preventDefault()
    const newReview = {
        comment: comment,
        score: score,
        movie: selectedMovie.Title
    }
    // console.log(newReview);
    // console.log(loggedIn);
    const copyUser = {...loggedIn}
    loggedIn.review.push(newReview)
    onNewReviewSubmit(copyUser)
    // console.log(loggedIn);
    setComment("")
    setScore(0)
}

    return (
            <>
            <div className="movie-review-form">
                <h4>CREATE NEW REVIEW</h4>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="form-inputs" type="text" id="comment" placeholder="Enter Comment.." value={comment} onChange={handleCommentChange} required />
                    <input className="form-inputs" type="number" id="score" placeholder="Enter Score.." value={score} onChange={handleScoreChange} required />
                    <input type="submit" value="submit" />
                </form>
            </div>
            </>
            )
};


export default MovieReviewForm

