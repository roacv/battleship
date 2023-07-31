import React, { Component } from "react";
import { Line } from "./line";

export const Board = (props) => {
    return (
        <div className="ms-auto">
           <p>acá dibujo el tablero</p>
           {props.gameBoard.map((result,index)=> { return (
                <Line result={result}/>);})}
        </div>
    )
    };