
import React, {useState} from "react";


const UserForm = ({ onNewUserSubmit }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: name,
            email: email,
            password: password,
            review: []
        }
        onNewUserSubmit(user)
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="new-user-form">
                <h4>CREATE NEW USER</h4>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="user-form-inputs" type="text" id="name" placeholder="ENTER NAME.." value={name} onChange={handleNameChange} required />
                    <input className="user-form-inputs" type="text" id="email" placeholder="ENTER EMAIL.." value={email} onChange={handleEmailChange} required />
                    <input className="user-form-inputs" type="password" id="password" placeholder="PASSWORD.." value={password} onChange={handlePasswordChange} required />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}


export default UserForm;

