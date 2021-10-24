
import React from "react";

    const UserDisplayItem = ({user, onUserClick, onUserDelete}) => {

        const handleDelete = () => {
            onUserDelete(user._id)
        }

        const handleClick = function(){
            onUserClick(user);
          }

        return(
        <>
        <p onClick={handleClick}>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.password}</p>
        <button onClick={handleDelete}>DELETE</button>
        </>
        )}

export default UserDisplayItem;

