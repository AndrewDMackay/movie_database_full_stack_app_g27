
import React, { useState } from "react";


const MovieGenre = ({ onGenreSelected }) => {

    const [genre, setGenre] = useState("")

    const handleChange = function (event) {
        setGenre(event.target.value)
    }

    const handleSubmit = function (event) {
        event.preventDefault()
        onGenreSelected(genre)
    }


    return (
        <>  
            <div>
                <form className="search-bar-form">
                    <input className="form-inputs" type="text" id="title" placeholder="Search by title..." onChange={handleChange} />
                    <input type="submit" value="Search" onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}


export default MovieGenre

