import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="Cards">
				<div className="card-group">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
