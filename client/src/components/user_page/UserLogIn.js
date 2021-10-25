
import React, {useState} from "react";

const UserLogin = ({onLoginSubmit}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: username,
            password: password
        }
        onLoginSubmit(user)
        setUsername("")
        setPassword("")
    }

    return(
        <>
        <h4>EXISTING USER</h4>
        <div className="user-login">
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Enter Username" value={username} onChange={handleNameChange} required/>
                <input type="text" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                <button className="button-submit"><input type="submit" value="Log in" /></button>
            </form>
        </div>
        </>
    )
}


export default UserLogin;

