
import React, {useState} from "react";


    const UserLogin = ({onLoginSubmit}) => {

        const [username, setUsername] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const handleNameChange = (event) => {
            setUsername(event.target.value)
        }

        // const handleEmailChange = (event) => {
        //     setEmail(event.target.value)
        // }

        const handlePasswordChange = (event) => {
            setPassword(event.target.value)
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            const booking = {
                username: username,
                email: email,
                password: password
            }
            onBookingSubmit(booking)
            setName("")
            setEmail("")
            setPassword("")
        }

        return(
            <>
            <div className="user-login">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="form-inputs" type="text" id="name" placeholder="Enter Username.." value={username} onChange={handleNameChange} required/>
                    <input className="form-inputs" type="text" id="password" placeholder="Password.." value={password} onChange={handlePasswordChange} required/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </>
        )
    }


export default UserLogin;

