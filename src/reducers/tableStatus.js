
let tablestatus = new Array(16).fill(false);
export default (state = tablestatus, action) => {
    switch (action.type) {
        case "ACTIVE_TABLE":
            var newState = [...state];
            newState[action.tableID] = !newState[action.tableID];
            return newState;
        default:
            return state;
    }
};