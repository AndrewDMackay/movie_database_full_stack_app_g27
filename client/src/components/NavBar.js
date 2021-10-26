
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "./main_movie_page/SearchBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const NavBar = ({ onTitleSearched }) => {
    
    
    // const history = useHistory();

    // const goBack = () => {
    //     history.goBack();
    // }


    return (

        <Router>
            <>
            <div className="main-nav-bar">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">USER LOG IN</Link>
                    </li>
                    <li>
                        <Link to="/year">SEARCH MOVIES</Link>
                    </li>
                    <div className="nav-search-bar">
                        <SearchBar onTitleSearched={onTitleSearched} />
                    </div>
                </ul>
            </div>
            </>
        </Router>
    )
};


export default NavBar

