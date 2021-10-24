
import React from 'react'
import UserDisplayItem from './UserDisplayItem'

    const UserDisplay = ({users, onUserClick, onUserDelete}) => {
        const gridNodes = users.map((user, index) => {
            return <UserDisplayItem user={user} key={index} onUserDelete={onUserDelete}/>
        })
        return(
            <>
            <h2>ALL USERS</h2>
            {gridNodes}
            </>

        )
    }

export default UserDisplay;
