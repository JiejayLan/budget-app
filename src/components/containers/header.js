import { Row, Col } from "reactstrap";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Header = props => {
  let count = 0;
  for (let i = 0; i < props.activeTable.length; i++) {
    if (props.activeTable[i] === true) count++;
  }
  return (
    <div>
      <Row>
        <Col>
          <h1>My restaurent</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            table avaible: {count} / {props.activeTable.length}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>money earned: ${props.totalMoney}</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
