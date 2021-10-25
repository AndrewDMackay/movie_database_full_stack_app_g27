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
                <link to="/"> Home </link>
            </li>
            <li>
                <link to="/genres">Movies by Genre</link>
            </li>
            <li>
                <link to="/year">Movies by Year</link>
            </li>
            <li>
                <link to="/toprated">Top Rated Movies</link>
            </li>
            <li>
                <link to="/favourites">Favourites</link>
            </li>
        </ul>
    )
};

export default NavBar