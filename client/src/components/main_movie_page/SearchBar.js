
import React from "react";


const SearchBar = ({ onTitleSearched }) => {

    let title = "";

    const handleChange = function (event) {
        title += event.nativeEvent.data;
    }

    const handleSubmit = function (event) {
        event.preventDefault()
        onTitleSearched(title)
    }


    return (
        <>  
            <div className="search-bar">
                <h4>THIS IS THE SEARCH BAR..</h4>
                <form className="form-inputs">
                    <input type="text" id="title" placeholder="Search by title..." onChange={handleChange} />
                    <button className="custom-button"><input type="submit" value="Search" onClick={handleSubmit} /></button>
                </form>
            </div>
        </>
    )
}


export default SearchBar

