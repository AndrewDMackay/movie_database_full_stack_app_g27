import React from "react";

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