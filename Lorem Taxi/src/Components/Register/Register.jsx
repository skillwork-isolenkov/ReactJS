import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="register">
            <div className="register-form">
                <h4>Sign Up</h4>
                <form action="/">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Repeat Password" />
                    <div className="register-input">
                        <input type="number" placeholder="Your Phone Number" />
                        <button>Register</button>
                    </div>
                    <p>If you already have an account, <Link to="/login">Sign In!</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;