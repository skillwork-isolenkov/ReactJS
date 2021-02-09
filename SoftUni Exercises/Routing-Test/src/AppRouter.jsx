import { Route, Switch, Redirect } from 'react-router-dom'
import Add from "./Components/Add";
import All from "./Components/All";
import Home from "./Components/Home";

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/add' component={Add} />
                <Route path='/all/:foodid' component={All} />
                <Redirect to='/home' />
            </Switch>
        </div>

    );
}

export default AppRouter;