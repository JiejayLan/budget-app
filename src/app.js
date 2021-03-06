import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { startSetExpense } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import {login, logout} from "./actions/auth";


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("log in");
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            // history.push('/');

        });
    } else {
        store.dispatch(logout());
        console.log("log out");
        renderApp();
        history.push('/login');
    }
});

