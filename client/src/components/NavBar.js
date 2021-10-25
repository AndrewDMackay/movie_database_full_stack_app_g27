
import React from "react";
import { Link, useHistory } from "react-router-dom";


const NavBar = () => {
    
    // const history = useHistory();

    // const goBack = () => {
    //     history.goBack();
    // }


    return (
            
        <>
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
        </ul>
        </>
    )
};


export default NavBar

