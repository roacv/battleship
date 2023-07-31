import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Board } from "../component/board";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let gameBoard = [
		[1,1,1,1,1,0,0,0,0,1],
	    [0,0,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,0],
		[1,0,0,1,1,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,0,0,0,0,0,0]
	];
	return (
		<div className="text-center mt-5">
			<h1>Battelship</h1>
			<div className="container">
				<Board gameBoard = {gameBoard}/>
			</div>
		</div>
	);
};
