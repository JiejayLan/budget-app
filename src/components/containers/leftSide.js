import { Button, Col } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import activeTable from "../../actions/activeTable.js";
import deleteItem from "../../actions/deleteItem.js";
import increaseMoney from "../../actions/increaseMoney.js";

import "bootstrap/dist/css/bootstrap.css";

const LeftSide = props => {

  let check = "Check In";
  return (
    <Col className="left" xs="2">
      <h3>Table #: {props.selectTable}</h3>
      <Button
        color="success"
      >
        {check}
      </Button>


    </Col>
  );
};


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

export default  connect(StateToProps, dispatchToProps)(LeftSide);
