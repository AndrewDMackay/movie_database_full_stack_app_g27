
import React, { useState } from "react";


const SearchBar = ({ onTitleSearched }) => {

    const [title, setTitle] = useState("")

    const handleChange = function (event) {
        setTitle(event.target.value)
    }

    const handleSubmit = function (event) {
        event.preventDefault()
        onTitleSearched(title)
    }


    return (
        <>  
            <div className="search-bar">
                <form className="form-container">
                    <input className="form-inputs" type="text" id="title" placeholder="Search by title..." onChange={handleChange} />
                    <input type="submit" value="Search" onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}


export default SearchBar

