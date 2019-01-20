import LeftSide from "../components/leftSide.js";
import { connect } from "react-redux";
import activeTable from "../actions/activeTable.js";
import deleteItem from "../actions/deleteItem.js";
import increaseMoney from "../actions/increaseMoney.js";
const StateToProps = state => {
  return {
    selectTable: state.selectTable,
    tableItems: state.tableItems,
    activeTable: state.activeTable
  };
};

const dispatchToProps = dispatch => {
  return {
    onActive: (tableID, amount) => {
      dispatch(activeTable(tableID));
      dispatch(increaseMoney(amount));
    },
    onDelete: (tableID, index) => {
      dispatch(deleteItem(tableID, index));
    }
  };
};

const LeftContainer = connect(
  StateToProps,
  dispatchToProps
)(LeftSide);

export default LeftContainer;
