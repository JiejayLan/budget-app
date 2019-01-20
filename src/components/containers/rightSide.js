import { Button, Col } from "reactstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
const Buttons = props => {
  return (
    <Button
      onClick={() => {
        props.activeTable[props.tableID] === true
          ? props.onAdd(props.tableID, props.name, props.price)
          : null;
      }}
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
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Yellow Tail"}
        price={6.5}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Baby Yellowtail"}
        price={7.75}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Fluke"}
        price={5.5}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Gizzard Shad"}
        price={7.5}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Horse Mackerel"}
        price={7.5}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Striped Jack"}
        price={7.5}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Sesame Tofu"}
        price={8}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"House Tofu"}
        price={10}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Seaweed Salad"}
        price={8}
        onAdd={props.onAdd}
      />
      <Buttons
        tableID={props.selectTable}
        activeTable={props.activeTable}
        name={"Sim Vegetable"}
        price={15}
        onAdd={props.onAdd}
      />
    </Col>
  );
};

export default RightSide;
