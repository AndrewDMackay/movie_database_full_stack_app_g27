
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


    const UserDisplayItem = ({user, onUserClick, onUserDelete}) => {

        const handleDelete = () => {
            onUserDelete(user._id)
        }

        const handleClick = function(){
            onUserClick(user);
          }

        return(
        <>
        <div className="user-display-item">
            <p onClick={handleClick}>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <button className="custom-button" onClick={handleDelete}>DELETE</button>
        </div>
        </>
        )}


export default UserDisplayItem;

