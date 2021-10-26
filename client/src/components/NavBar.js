
import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./main_movie_page/SearchBar";


const NavBar = ({ onTitleSearched }) => {


    return (

            <>
            <div className="main-nav-bar">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/users">USERS</Link>
                    </li>
                    <li>
                        <Link to="/movies">MOVIES</Link>
                    </li>
                    <div className="nav-search-bar">
                        <SearchBar onTitleSearched={onTitleSearched} />
                    </div>
                </ul>
            </div>
            </>
    )
};


export default NavBar

