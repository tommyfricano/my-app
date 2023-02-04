import React, {useState} from "react"

const RegistrationForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="ex: johndoe32" id="Username" name="Username" />
                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="Password" name="Password" placeholder="******" />
                <button type="submit">Register</button>
                <button onClick={() => props.onFormSwitch("Register")}>Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;