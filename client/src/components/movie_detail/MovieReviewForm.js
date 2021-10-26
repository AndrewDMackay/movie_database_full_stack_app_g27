
import React, { useState } from 'react'


function MovieReviewForm() {
    const [] = useState("");

    return (
            <>
                <div className="movie-review-form">
                    <h4>CREATE NEW REVIEW</h4>
                    <form className="form-container" onSubmit={handleSubmit}>
                        <input className="form-inputs" type="text" id="comment" placeholder="Enter Comment.." value={comment} onChange={handleCommentChange} required />
                        <input className="form-inputs" type="text" id="score" placeholder="Enter Score.." value={score} onChange={handleScoreChange} required />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </>
            )
};

            export default MovieReviewForm