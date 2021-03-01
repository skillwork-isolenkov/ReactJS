import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <h2 className="title-head"><a href="/">School Website</a></h2>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Project</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;