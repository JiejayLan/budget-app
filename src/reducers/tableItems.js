

let tableList = [];
for (let i = 0; i < 16; i++) {
    tableList.push([]);
}


export default (state = tableList, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            var newState = [...state];
            newState[action.tableID].push(action.food);
            console.log("push food",action.food, "to",action.tableID);
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