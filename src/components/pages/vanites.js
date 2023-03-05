import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Erreur from "../navigation/erreur";
function Vanites() {
	return (
		<div>
			<Navigation />
			<h4>Memento Mori</h4>
			<p>
				Au tournant du Moyen-âge et de la période moderne, il s'agissait de bien
				mourir et mourir était un art.
				<br /> Tradition d'origine religieuse, les fidèles étaient invités à
				porter sur eux et dans leur maison en tout temps un objet leur rappelant
				leur condition de mortel. <br />
				Traversant les âges, ce genre d'art perdure dans notre temps, car la
				réflexion sur notre finalité est universelle, posant la question "que
				restera-t-il?" mais aussi nous rappelant qu'il faut vivre car la vie est
				éphémère, et la beauté, la richesse et les passions sont au final, bien
				futiles.
			</p>
			<p>
				Voici une petite liste des symbolismes et significations :
				<br />
				<ul>
					<li>Tête de mort, fleurs fânées, fruits pourris : la finalité</li>
					<li>Bulles ou orbes: fragilité de la vie</li>
					<li>Papillon: briévité de la vie</li>
					<li>Bougies allumées, montre, horloge : le temps qui passe</li>
					<li>Bougie éteinte : la mort</li>
					<li>Citron : l'amertume</li>
					<li>
						Livres, instruments de musique, art en général : ce qui perdure au
						delà de la mort
					</li>
				</ul>
			</p>
			<Footer />
		</div>
	);
}
export default Vanites;
