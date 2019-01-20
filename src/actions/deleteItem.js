

const deleteFood = ( tableID,foodID) => {
    return {
        type: "DELETE_ITEM",
        tableID: tableID,
        foodID: foodID
    };
};

export default  deleteFood;