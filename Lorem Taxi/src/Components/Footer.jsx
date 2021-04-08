import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import facebook from './img/footer/fb.png'
import instagram from './img/footer/instagram.png'
import linkedin from './img/footer/linkedin.png'
import twitter from './img/footer/twitter.png'

const { Link } = require("react-router-dom")

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-form">
                    <h4>Subscribe Our Newsletter</h4>
                    <form action="/">
                        <input type="text" placeholder="Enter your email" />
                        <button><FontAwesomeIcon icon={faArrowRight} /></button>
                    </form>
                </div>

                <div className="footer-links">
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

                <div className="footer-social">
                    <ul>
                        <li><img src={facebook} alt="facebook" /></li>
                        <li><img src={instagram} alt="instagram" /></li>
                        <li><img src={twitter} alt="twitter" /></li>
                        <li><img src={linkedin} alt="linkedin" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;