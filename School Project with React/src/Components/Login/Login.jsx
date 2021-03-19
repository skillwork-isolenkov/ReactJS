import { useState } from 'react';
const { Link } = require("react-router-dom");

const Login = () => {
    const [message, setMessage] = useState('');

    const loginButton = () => {
        let container = document.querySelector('.container');
        let forgotPsw = document.querySelector('.forgot-psw');
        let loginSpan = document.querySelector('.login-span');

        let username = document.querySelector('#username');
        let psw = document.querySelector('#psw');

        if (username.value !== '' && psw.value !== '') {
            container.style.display = 'none'
            forgotPsw.style.marginBottom = '33%';

            loginSpan.style.color = 'green';
            setMessage('Your have Login Successfully!');
        }
        else {
            loginSpan.style.color = '#cf1717';
            loginSpan.style.marginTop = '30px';
            setMessage('Please provide your username and your password!');
        }
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

            <span className="login-span">{message}</span>

            <div className="container signin">
                <p className="forgot-psw">Forgot Password? <a className="forgotten-pass" href="/forgottenpsw">Click Here</a>.</p>
            </div>
        </div>
    );
}

export default Login;