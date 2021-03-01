import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import ForgottenPassword from './Components/ForgottenPassword/ForgottenPassword';

const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/gallery" component={Gallery}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/forgottenpsw" component={ForgottenPassword}></Route>
                <Redirect to='/home' />
            </Switch>
        </div>
    );
}

export default AppRouter;