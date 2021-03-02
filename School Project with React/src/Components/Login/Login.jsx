import { useState } from 'react';
const { Link } = require("react-router-dom");

const Login = () => {
    const [message, setMessage] = useState('');

    const loginButton = () => {
        setMessage('Your have Login Successfully!')
    }

    return (
        <div className="login">
            <h2>Login Page</h2>
            <div className="container">
                <label for="username"><b>Username:</b></label>
                <input type="text" name="username" id="username" required />

                <label for="psw"><b>Password:</b></label>
                <input type="password" name="psw" id="psw" required />

                <div className="buttons">
                    <Link to="/login" onClick={loginButton} className="loginbtn">Login</Link>
                    <Link to="/register" className="registerbtn">Register New User</Link>
                </div>
            </div>

            <span className="register-span">{message}</span>

            <div className="container signin">
                <p>Forgot Password? <a className="forgotten-pass" href="/forgottenpsw">Click Here</a>.</p>
            </div>
        </div>
    );
}

export default Login;