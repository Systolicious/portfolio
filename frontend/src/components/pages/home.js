import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Erreur from "../navigation/erreur";
import "../../style/generalstyle.css";
function Home() {
	return (
		<div>
			<Navigation />
			<h1>Bienvenue dans mon univers!</h1>
			<h4>Photographe, peintre, artiste toujours en quête de nouveauté.</h4>
			<p>
				J'aime organiser le chaos au millimètre près et construire une ambiance,
				mais pour cela il faut bien comprendre ses outils, la lumière, les
				couleurs, et pratiquer.
			</p>
			<p>Mes créations sont divisées en 2 styles:</p>
			<ul>
				<li>
					Où j'apprends de nouvelles techniques et cherche les limites de la
					technologie ou des outils
				</li>
				<li>Où j'utilise mes connaissances pour bâtir un univers précis</li>
			</ul>
			<h4>Philosophie</h4>
			<p>
				Sous mes faux airs de déesse païenne, je suis restée quelqu’un de très
				humble : en guise d'autel, un petit coin de studio où les objets se
				posent, alignés avec attention tel des offrandes aux dieux de la photo.
				<br />
				Armée de mon fidèle Nikon D500, accompagnée de Kevin la star, nous
				explorons l’immensité merveilleuse de la folie, perçant l'obscurité pour
				y bâtir des portraits de mort et de sorcières.
				<br />
				Découvrez-les dans Vanités.
			</p>

			<p>
				Mais je fais aussi des joyeusetés : découvrez les dans Mignonneries.
			</p>
			<Footer />
		</div>
	);
}
export default Home;
