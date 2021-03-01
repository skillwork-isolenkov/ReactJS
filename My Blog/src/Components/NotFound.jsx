import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Opps! Page not found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}

export default NotFound;