
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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
            <div>
                <form className="search-bar-form">
                    <input className="form-inputs" type="text" id="title" placeholder="Search by title..." onChange={handleChange} />
                    <input type="submit" value="Search" onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}


export default SearchBar

