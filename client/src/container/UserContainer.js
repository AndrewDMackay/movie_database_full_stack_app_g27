
import React, { useState, useEffect } from 'react'
import UserDisplay from '../components/user_page/UserDisplay'
import UserForm from '../components/user_page/UserForm'
import { getUsers, postUser, deleteUser, postNewUser } from '../services/MovieService'

const UserContainer = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getUsers()
        .then(data => {setAllUsers(data)})
    },[])

    const onNewUserSubmit = (user) => {
        postNewUser(user)
    }

    const onUserDelete= (id) => {
        deleteUser(id)
    }

    const onUserClick = function (user) {

    }

    return (
        <>
            <h1>This is the UserContainer</h1>
            <UserForm onNewUserSubmit={onNewUserSubmit} />
            <UserDisplay users={allUsers} onUserDelete={onUserDelete} onNewUserSubmit={onNewUserSubmit} onUserClick={onUserClick}/>
        </>
    )
}

export default UserContainer;

