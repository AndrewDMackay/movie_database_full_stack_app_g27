
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        <Router>
            <>
            <h4>EXISTING USER</h4>
            <div className="user-login">
                <form onSubmit={handleSubmit}>
                    <input className="form-inputs" type="text" id="name" placeholder="Enter Username" value={username} onChange={handleNameChange} required/>
                    <input className="form-inputs" type="text" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                    <input type="submit" value="Log in" />
                </form>
            </div>
            </>
        </Router>
    )
}


export default UserLogin;

