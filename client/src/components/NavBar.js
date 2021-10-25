
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
                <link to="/">HOME</link>
            </li>
            <li>
                <link to="/genres">MOVIES BY GENRE</link>
            </li>
            <li>
                <link to="/year">MOVIES BY YEAR</link>
            </li>
            <li>
                <link to="/toprated">TOP RATED MOVIES</link>
            </li>
            <li>
                <link to="/favourites">FAVOURITES</link>
            </li>
        </ul>
    )
};


export default NavBar

