import './Main.css'

const Main = ({ children, title }) => {

    return (
        <nav className="Main">
            <h1>{title}</h1>
            {children}
        </nav>
    );
}

export default Main;