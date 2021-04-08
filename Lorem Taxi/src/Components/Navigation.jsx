import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <h3><Link to="/">LoremTaxi</Link></h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;