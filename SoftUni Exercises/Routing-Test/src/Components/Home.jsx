import { Route } from 'react-router-dom'

const Home = (props) => {
    return (
        <h1>
            Welcome to my app!
            <Route path={props.match.url + '/contact'} render={() => (
                <h2>Some text</h2>
            )} />
        </h1>
    );
}

export default Home;