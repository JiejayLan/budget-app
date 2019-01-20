import RightSide from "../components/rightSide.js";
import { connect } from "react-redux";
import addItem from "../actions/addItem.js";

const StateToProps = state => {
  return {
    selectTable: state.selectTable,
    activeTable: state.activeTable
  };
};
const dispatchToProps = dispatch => {
  return {
    onAdd: (tableID, name, price) => {
      dispatch(addItem(tableID, name, price));
    }
  };
};

const RightContainer = connect(
  StateToProps,
  dispatchToProps
)(RightSide);

export default RightContainer;
