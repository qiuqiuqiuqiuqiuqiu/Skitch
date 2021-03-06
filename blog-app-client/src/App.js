import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {view as Portal} from './common/portal';
import {view as AdminComponent} from './common/admin';
import {view as LoginComponent} from './pages/login';

import {
    userIsNotAuthenticated, userIsAuthenticated
} from './pages/login/auth';

const Admin = userIsAuthenticated(AdminComponent);
const Login = userIsNotAuthenticated(LoginComponent);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Switch>
                            <Route path={'/home'} component={(props) => <Portal {...props}/>}/>
                            <Route path={'/login'} component={(props) => <Login {...props}/>}/>
                            <Route path={'/admin'} component={(props) => <Admin {...props}/>}/>
                            <Route component={(props) => <Portal {...props}/>}/>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;