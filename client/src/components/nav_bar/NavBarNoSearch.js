
import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = ({ }) => {



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
                    <li>
                        <Link to="/reviews">REVIEWS</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};


export default NavBar

