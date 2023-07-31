import React, { Component } from "react";

export const Square = (props) => {
    return (
        <div className={`m-1 ${props.result==0 ? 'btn-secondary' : 'btn-primary'}`} style={{width : "45px", height: "45px"}}>
           {props.result}
        </div>
    )
    };