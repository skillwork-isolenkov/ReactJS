import { useState } from 'react';

const Register = () => {
    const [message, setMessage] = useState('');

    const registerButton = () => {
        let container = document.querySelector('.container');
        let registerParagraph = document.querySelector('.register-paragraph');

        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let mobile = document.querySelector('#mobile');
        let username = document.querySelector('#username');
        let psw = document.querySelector('#psw');
        let pswRepeat = document.querySelector('#psw-repeat');

        if (name.value !== '' && email.value !== '' && mobile.value !== '' && username.value !== '' && psw.value !== '' && pswRepeat.value !== '') {
            container.style.display = 'none'
            registerParagraph.style.marginBottom = '33%';

            setMessage('Your account has been registered successfully. We will contact you soon for further process!');
        }
    }

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

                <button onClick={registerButton} type="submit" className="registerbtn">Register</button>
            </div>

            <span className="register-span">{message}</span>

            <div className="container signin">
                <p className="register-paragraph">Already have an account? <a className="sign-in" href="/login">Sign in</a>.</p>
            </div>
        </div>
    );
}

export default Register;