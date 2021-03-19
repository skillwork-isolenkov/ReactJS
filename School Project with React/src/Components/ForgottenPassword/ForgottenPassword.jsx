import { useState } from 'react';

const ForgottenPassword = () => {
    const [message, setMessage] = useState('');

    const forgottenPswButton = () => {
        let container = document.querySelector('.container');
        let loginParagraph = document.querySelector('.loginParagraph');
        let forgottenSpan = document.querySelector('.forgotten-span');

        let username = document.querySelector('#username');
        let email = document.querySelector('#email');

        if (username.value !== '' && email.value !== '') {
            container.style.display = 'none'
            loginParagraph.style.marginBottom = '35%';
            forgottenSpan.style.color = 'green';

            setMessage('Your password has been reset!')
        } else {
            forgottenSpan.style.color = '#cf1717';
            setMessage('Please provide your username and your e-mail!')
        }
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

            <span className="forgotten-span">{message}</span>

            <div className="container signin">
                <p className="loginParagraph">For Login? <a className="login-button" href="/login">Click Here</a>.</p>
            </div>
        </div>
    );
}

export default ForgottenPassword;