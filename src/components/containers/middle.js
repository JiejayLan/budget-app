import { Button, Col } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import selectTable from "../../actions/selectTable.js";
import "bootstrap/dist/css/bootstrap.css";

const Middle = props => {
  let buttons = [];
  for (let i = 0; i < 16; i++)
    buttons.push(
      <Button
        color="info"
        id={i}
        key={i}
        onClick={event => {
          props.onSelect(event.target.id);
        }}
      >
        Table {i}
      </Button>
    );
  return (
    <Col className="middle" xs="8">
      {buttons}
    </Col>
  );
};

const dispatchToProps = dispatch => {
    return {
        onSelect: tableID => {
            dispatch(selectTable(tableID));
        }
    };
};

export default connect(null, dispatchToProps)(Middle);





