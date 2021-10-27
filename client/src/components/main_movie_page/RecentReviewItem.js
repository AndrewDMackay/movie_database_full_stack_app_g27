import React from "react";
import { FaPoop } from "react-icons/fa";

const RecentReviewItem = ({ review }) => {

    return (
        <div className="movie-review-item">
            <div className="movie-review-item-icon"><FaPoop /></div>
            <h4>THIS IS A RECENT REVIEW ITEM</h4>
            <p>{review.movieName}</p>
            <p>User: {review.viewer}</p>
            <p>Comment: {review.comment}</p>
            <p>Score: {review.score} <FaPoop /></p>
        </div>
    )
}

export default RecentReviewItem