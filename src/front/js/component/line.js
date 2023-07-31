import React, { Component } from "react";
import { Square } from "./sqare";

export const Line = (props) => {
    return (
        <div className="d-flex justify-content-center">
           {props.result.map((result,index)=> {return (<Square result={result}/>);})}
        </div>
    )
    };