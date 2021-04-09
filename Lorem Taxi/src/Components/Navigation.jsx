import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    let timesClicked = 0;

    const burgerButton = (e) => {
        e.preventDefault();
        timesClicked++;

        if (timesClicked % 2 === 0) {
            document.querySelector('.navigation ul').style.display = "none";
            document.querySelector('.navigation').style.height = "8vh";
        } else {
            document.querySelector('.navigation ul').style.display = "flex";
            document.querySelector('.navigation').style.height = "40vh";
        }
    }
    return (
        <div className="navigation">
            <h3><Link to="/">LoremTaxi</Link></h3>
            <a href="true" onClick={burgerButton} id="burger-menu"><FontAwesomeIcon icon={faBars} /></a>
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