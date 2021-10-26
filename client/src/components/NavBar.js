
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchBar from "./main_movie_page/SearchBar";

import MovieContainer from "../container/MovieContainer";
import UserContainer from "../container/UserContainer";


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
                        <Link to="/users">USER LOG IN</Link>
                    </li>
                    <li>
                        <Link to="/movies">SEARCH MOVIES</Link>
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

