import uuid from "uuid";


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
export default  addFood;