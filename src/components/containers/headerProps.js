import Header from "../components/header.js";
import { connect } from "react-redux";

const StateToProps = state => {
  return {
    totalMoney: state.totalMoney,
    activeTable: state.activeTable
  };
};

const HeaderContainer = connect(
  StateToProps,
  null
)(Header);
export default HeaderContainer;
