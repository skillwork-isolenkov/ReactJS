import Link from '../shared/Link/Link'
import './Navigation.css'

const Navigation = () => {

    return (
        <nav className="Navigation">
            <ul>
                <Link url="#">
                    <img id="logo" src="white-origami-bird.png" alt="my-app-logo" />
                </Link>
                <Link url="#">Going to 1</Link>
                <Link url="#">Going to 2</Link>
            </ul>
        </nav>
    );
}

export default Navigation;