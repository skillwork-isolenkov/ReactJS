const ForgottenPassword = () => {
    return (
        <div className="forgottenpsw">
            <h2>Forgotten Password Page</h2>
            <div className="container">
                <label for="username"><b>Username:</b></label>
                <input type="text" name="username" id="username" required />

                <label for="email"><b>E-mail:</b></label>
                <input type="email" name="email" id="email" required />

                <div className="buttons">
                    <button type="submit" className="reset-password">Reset Password</button>
                </div>
            </div>

            <span className="register-span"></span>

            <div className="container signin">
                <p>For Login? <a className="login-button" href="/login">Click Here</a>.</p>
            </div>
        </div>
    );
}

export default ForgottenPassword;