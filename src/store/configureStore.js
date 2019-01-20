import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import selectTable from "../reducers/selectTable"
import tableItem from "../reducers/tableItems"
import tableStatus from "../reducers/tableStatus"
import totalMoney from "../reducers/totalMoney"
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer, selectTable:selectTable,
            tableItem:tableItem,
            tableStatus:tableStatus,
            totalMoney:totalMoney

        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
