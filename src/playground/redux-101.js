import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addFood = (name, price, tableID) => {
    return {
        type: "ADD_ITEM",
        tableID: tableID,
        food: {
            name: name,
            price: price,
            id:uuid()
        }
    };
};

const deleteFood = ( tableID,foodID) => {
    return {
        type: "DELETE_ITEM",
        tableID: tableID,
        foodID: foodID
    };
};


const activeTable = tableID => {
    return {
        type: "ACTIVE_TABLE",
        tableID: tableID
    };
};

const increaseMoney = amount => {
    return {
        type: "INCREASE_MONEY",
        amount: amount
    };
};

const selectable = tableID => {
    return {
        type: "SELECT_TABLE",
        tableID: tableID
    };
};

let tableList = [];
for (let i = 0; i < 5; i++) {
    tableList.push([]);
}

let tablestatus = new Array(16).fill(false);

const tableItems = (state = tableList, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            var newState = [...state];
            newState[action.tableID].push(action.food);
            console.log("push food",action.food);
            return newState;
        case "DELETE_ITEM":
            var newState = [...state];
            newState[0]=newState[0].filter(({ id }) => {
              return id!=action.foodID;
            });
            // newState[0].splice(0,1);
            return newState;
        case "ACTIVE_TABLE":
            var newState = [...state];
            newState[action.tableID] = [];
            return newState;
        default:
            return state;
    }
};


const tableStatus = (state = tablestatus, action) => {
    switch (action.type) {
        case "ACTIVE_TABLE":
            var newState = [...state];
            newState[action.tableID] = !newState[action.tableID];
            return newState;
        default:
            return state;
    }
};



const totalMoney = (state = 0, action) => {
    switch (action.type) {
        case "INCREASE_MONEY":
            return state + action.amount;
        default:
            return state;
    }
};

const selectTable = (state = null, action) => {
    switch (action.type) {
        case "SELECT_TABLE":
            if (state === action.tableID) return null;
            return action.tableID;
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        tableItems: tableItems,
        tableStatus:tableStatus,
        totalMoney:totalMoney,
        selectTable:selectTable
    })
);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(addFood("jie",1,"0")); // startDate 125
store.dispatch(addFood("jie",1,"0")); // startDate 125
store.dispatch(selectable("0"));
store.dispatch(increaseMoney (12));
// store.dispatch(activeTable("0"));
// store.dispatch(deleteFood("0",store.getState().tableItems[0][0].id)); // startDate 125

