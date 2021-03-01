const Login = () => {
    return (
        <div className="login">
            <h2>Login Page</h2>
            <div className="container">
                <label for="username"><b>Username:</b></label>
                <input type="text" name="username" id="username" required />

                <label for="psw"><b>Password:</b></label>
                <input type="password" name="psw" id="psw" required />

                <div className="buttons">
                    <button type="submit" className="loginbtn">Login</button>
                    <button type="submit" className="registerbtn">Register New User</button>
                </div>
            </div>

            <span className="register-span"></span>

            <div className="container signin">
                <p>Forgot Password? <a className="forgotten-pass" href="/forgottenpsw">Click Here</a>.</p>
            </div>
        </div>
    );
}

export default Login;