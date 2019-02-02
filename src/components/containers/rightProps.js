import RightSide from "./rightSide.js";
import { connect } from "react-redux";
import addFood from "../../actions/addFood.js";

const StateToProps = state => {
  return {
    selectTable: state.selectTable,
    activeTable: state.tableStatus
  };
};
const dispatchToProps = dispatch => {
  return {
    onAdd: (name, price, tableID)=>{
      dispatch(addFood(name, price, tableID));
    }

  };
};

const RightContainer = connect(
  StateToProps,
  dispatchToProps
)(RightSide);

export default RightContainer;
