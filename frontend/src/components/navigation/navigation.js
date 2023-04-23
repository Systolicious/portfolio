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
				<Link to="/fleurs">Fleurs</Link>
			</button>
			<button>
				<Link to="/champignons">Champignons</Link>
			</button>
			<button>
				<Link to="/etoiles">Etoiles</Link>
			</button>
			<button>
				<Link to="/portraits">Portraits</Link>
			</button>
			<button>
				<Link to="/vanites">Vanités</Link>
			</button>
			<button>
				<Link to="/art">Art</Link>
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
