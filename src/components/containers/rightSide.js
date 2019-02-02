import { Button, Col } from "reactstrap";
import React from "react";


import "bootstrap/dist/css/bootstrap.css";
const Buttons = props => {
  return (
    <Button
       onClick={props.activeTable[props.tableID] === true?()=>{props.onAdd(props.name,props.price,props.tableID)}:null}
    >
      ${props.price} {props.name}
    </Button>
  );
};
const RightSide = props => {
  return (
    <Col className="right" xs="2">
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}

        name={"Lean Tuna"}
        price={6}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}

        name={"Fatty Tuna"}
        price={11}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}

        name={"Marinated Tuna"}
        price={7}
        onAdd={props.onAdd}
      />

    </Col>
  );
};

export default RightSide;
