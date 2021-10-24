
import React, {useState} from "react";


    const UserForm = ({onNewUserSubmit}) => {

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
                name: name,
                email: email,
                password: password
            }
            onNewUserSubmit(user)
            setName("")
            setEmail("")
            setPassword("")
        }

        return(
            <>
            <div className="new-user-form">
                <h4>CREATE NEW USER</h4>
                <form className="form-inputs" onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder="Enter Name.." value={name} onChange={handleNameChange} required/>
                    <input type="text" id="email" placeholder="Enter Email.." value={email} onChange={handleEmailChange} required/>
                    <input type="text" id="password" placeholder="Password.." value={password} onChange={handlePasswordChange} required/>
                    <button className="custom-button"><input type="submit" value="Submit" /></button>
                </form>
            </div>
            </>
        )
    }


export default UserForm;

