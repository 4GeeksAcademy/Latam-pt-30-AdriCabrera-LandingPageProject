import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./Card.jsx";
import { NavBar } from "./navbar.jsx";
import { Footer } from "./Footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container m-5 w-100">
			<NavBar />
			<Jumbotron />
			<div className="card-group w-100">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />

		</div>

	)
};

export default Home;
