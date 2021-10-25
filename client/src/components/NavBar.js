
import React from "react";
import { Link, useHistory } from "react-router-dom";


const NavBar = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }


    return (
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/genres">Movies by Genre</Link>
            </li>
            <li>
                <Link to="/year">Movies by Year</Link>
            </li>
            <li>
                <Link to="/toprated">Top Rated Movies</Link>
            </li>
            <li>
                <Link to="/favourites">Favourites</Link>
            </li>
        </ul>
    )
};


export default NavBar

