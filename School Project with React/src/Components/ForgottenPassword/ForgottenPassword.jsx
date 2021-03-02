import { useState } from 'react';

const ForgottenPassword = () => {
    const [message, setMessage] = useState('');

    const forgottenPswButton = () => {
        setMessage('Your password has been reset!')
    }


    return (
        <div className="forgottenpsw">
            <h2>Forgotten Password Page</h2>
            <div className="container">
                <label for="username"><b>Username:</b></label>
                <input type="text" name="username" id="username" required />

                <label for="email"><b>E-mail:</b></label>
                <input type="email" name="email" id="email" required />

                <div className="buttons">
                    <button onClick={forgottenPswButton} type="submit" className="reset-password">Reset Password</button>
                </div>
            </div>

            <span className="register-span">{message}</span>

            <div className="container signin">
                <p>For Login? <a className="login-button" href="/login">Click Here</a>.</p>
            </div>
        </div>
    );
}

export default ForgottenPassword;