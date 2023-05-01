import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../style/navstyle.css";

function Navigation() {
	return (
		<div>
			<div className="logoTitles">
				<img
					src={logo}
					className="logo"
					alt="skull logo"
				/>

				<div className="titles">
					<h1 className="titre">Flore</h1>
					<h1 className="titre">Sakowski</h1>
					<h4 className="sousTitre">La mamarazzi qui vous sort de l'ombre</h4>
				</div>
			</div>
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
