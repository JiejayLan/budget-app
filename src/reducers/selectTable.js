

export default (state = null, action) => {
    switch (action.type) {
        case "SELECT_TABLE":
            if (state === action.tableID) return null;
            return action.tableID;
        default:
            return state;
    }
};
