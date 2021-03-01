const Register = () => {
    return (
        <div className="register">
            <h2>User Registration Page</h2>

            <div className="container">
                <label for="name"><b>Name:</b></label>
                <input type="text" name="name" id="name" required />

                <label for="email"><b>E-mail:</b></label>
                <input type="email" name="email" id="email" required />

                <label for="mobile"><b>Mobile:</b></label>
                <input type="text" name="mobile" id="mobile" required />

                <label for="username"><b>Username:</b></label>
                <input type="text" name="username" id="username" required />

                <label for="psw"><b>Password:</b></label>
                <input type="password" name="psw" id="psw" required />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" name="psw-repeat" id="psw-repeat" required />

                <button type="submit" className="registerbtn">Register</button>
            </div>

            <span className="register-span"></span>

            <div className="container signin">
                <p>Already have an account? <a className="sign-in" href="/login">Sign in</a>.</p>
            </div>
        </div>
    );
}

export default Register;