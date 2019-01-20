

const selectable = tableID => {
    return {
        type: "SELECT_TABLE",
        tableID: tableID
    };
};

export default  selectable;