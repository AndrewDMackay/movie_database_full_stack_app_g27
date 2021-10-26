
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function reviewForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Name:
            <input type="text"/>
            </label>
            <label>
                Review:
                <input type="text"/>
            </label>

        </form>
    )
};

export default MovieReviewForm