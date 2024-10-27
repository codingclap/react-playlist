import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
 


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} =  useContext(UserContext);         // setUser Accept Data here after submitting

    const SubmitHandler = (e) => {
        e.preventDefault();
        setUser({username, password})            // Sending data to the UserContext
    }

    return (
        <>
            <div>
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={SubmitHandler}>Submit</button>
            </div>
        </>
    )
}

export default Login