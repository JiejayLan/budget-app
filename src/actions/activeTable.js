const activeTable = tableID => {
    return {
        type: "ACTIVE_TABLE",
        tableID: tableID
    };
};

export default  activeTable;