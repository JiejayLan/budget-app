export default (state = 0, action) => {
    switch (action.type) {
        case "INCREASE_MONEY":
            return state + action.amount;
        default:
            return state;
    }
};