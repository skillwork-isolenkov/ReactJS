import Link from '../shared/Link/Link'
import './Footer.css'

const Footer = () => {

    return (
        <nav className="Footer">
            <ul>
                <Link url="#">Going to 1</Link>
                <Link url="#">Going to 2</Link>
                <Link url="#">
                    <img id="logo" src="logo192.png" alt="my-app-logo" />
                </Link>
            </ul>
        </nav>
    );
}

export default Footer;