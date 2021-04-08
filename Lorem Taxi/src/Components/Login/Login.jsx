import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="login-form">
                <h4>Sign In</h4>
                <form action="/">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <div className="login-input">
                        <button>Login</button>
                    </div>
                    <p>Don't have an account yet? <Link to="/register">Sign Up!</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;