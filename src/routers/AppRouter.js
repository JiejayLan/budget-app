import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Order from '../components/Order';
import loginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <PrivateRoute path="/" component={ExpenseDashboardPage} exact={true} />
                <PublicRoute path="/login" component={loginPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/order" component={Order}/>
                <Route component={NotFoundPage} />

            </Switch>
        </div>
    </Router>
);

export default AppRouter;
