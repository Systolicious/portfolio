import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Navigation() {
	return (
		<div>
			<img
				src={logo}
				alt="skull logo"
			/>
			<h1>Flore Sakowski</h1>
			<button>
				<Link to="/">Accueil</Link>
			</button>
			<button>
				<Link to="/cv">CV</Link>
			</button>
			<button>
				<Link to="/galerie">Galerie</Link>
			</button>
			<button>
				<Link to="/mignonneries">Mignonneries</Link>
			</button>
			<button>
				<Link to="/bonus">Bonus</Link>
			</button>
			<button>
				<Link to="/contact">Contact</Link>
			</button>
		</div>
	);
}
export default Navigation;
