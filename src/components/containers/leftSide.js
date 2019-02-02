import { Button, Col } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import activeTable from "../../actions/activeTable.js";
import deleteItem from "../../actions/deleteItem.js";
import increaseMoney from "../../actions/increaseMoney.js";

import "bootstrap/dist/css/bootstrap.css";

const Food = props => {
    return (
        <div>
            <Button
                onClick={()=>{
                    props.onDelete(props.tableID,props.foodID)
                }}
            >
                X
            </Button>
            {props.name}|{props.price}
        </div>
    );
};


const LeftSide = props => {

    let check = "Check In";
    let foods =[];
    let sum =0;
    if(props.activeTable[props.selectTable]){
        check = "check out";
        foods = props.tableItems[props.selectTable];
    }
    if(foods.length!=0)
        sum = foods.reduce((acc,current)=>{
            return acc.price+current.price;
        })


    return (
        <div>
            <Col className="left" xs="2">
                <h3>Table #: {props.selectTable}</h3>
                <Button
                    color="success"
                    onClick={()=>{
                        props.onActive(props.selectTable);
                        if(check=="check out"){
                            console.log(sum);
                            props.onCheckout(sum);
                        }
                    }}
                >
                    {check}
                </Button>
            </Col>
            {foods.map((food,index)=>{
                return(
                    <Food
                        key ={index}
                        name = {food.name}
                        price={food.price}
                        foodID ={food.id}
                        tableID={props.selectTable}
                        onDelete = {props.onDelete}
                    >

                    </Food>
                )
            })}
        </div>
    );
};


const StateToProps = state =>{
    return {
        selectTable: state.selectTable,
        tableItems: state.tableItem,
        activeTable: state.tableStatus
    };
};

const dispatchToProps = dispatch => {
    return {
        onActive: (tableID) => {
            dispatch(activeTable(tableID));
        },
        onDelete: (tableID, foodID) => {
            dispatch(deleteItem(tableID, foodID));
        },

        onCheckout:(amount)=>{
            dispatch(increaseMoney(amount) );
        }
    };
};

export default  connect(StateToProps, dispatchToProps)(LeftSide);
