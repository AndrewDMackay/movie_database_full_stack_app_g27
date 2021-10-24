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
            This is the SearchBar
            <form>
                <input type="text" id="title" placeholder="Search by title..." onChange={handleChange} />
                <input type="submit" value="Search" onClick={handleSubmit} />
            </form>
        </>
    )
}

export default SearchBar