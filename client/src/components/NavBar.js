
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "./main_movie_page/SearchBar";


const NavBar = ({ onTitleSearched }) => {
    // const history = useHistory();

    // const goBack = () => {
    //     history.goBack();
    // }


    return (

        <>
            <div className="main-nav-bar">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/genres">MOVIES BY GENRE</Link>
                    </li>
                    <li>
                        <Link to="/year">MOVIES BY YEAR</Link>
                    </li>
                    <li>
                        <Link to="/toprated">TOP RATED MOVIES</Link>
                    </li>
                    <li>
                        <Link to="/favourites">FAVOURITES</Link>
                    </li>
                    <li>
                        <SearchBar onTitleSearched={onTitleSearched} />
                    </li>
                </ul>
            </div>
        </>
    )
};


export default NavBar

