import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/add'>Add</Link>
            <Link to='/all'>All</Link>
        </div>
    );
}

export default Navigation;