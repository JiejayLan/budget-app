import React from 'react';
import Middle from "./containers/middle"
import LeftSide from "./containers/leftSide"
import RightSide from "./containers/rightProps"
const HelpPage = () => (
    <div>
        This is order page
        <LeftSide/>
        <Middle/>
        <RightSide/>
    </div>
);

export default HelpPage;
