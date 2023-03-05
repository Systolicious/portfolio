import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Erreur from "../navigation/erreur";
function Cv() {
	return (
		<div>
			<Navigation />
			<h4>Développeur web en recherche d'alternance </h4>
			<h5>Bilingue anglais</h5>
			<p>
				Mon parcours atypique m’a permis d’accumuler une solide expérience
				commerciale et managériale, mais je souhaite me consacrer maintenant
				pleinement à ma passion pour la création de sites web.
			</p>

			<p>
				De nature volontaire et coopérative, très investie et à tendance
				autodidacte, j’ai longtemps tenté de me consacrer au développement web,
				mais sans trouver le bon moyen de me lancer sérieusement. J’ai eu
				cependant l’occasion de créer des petits sites web à l’occasion, au fil
				des années (avec mes petits moyens). Grace au PTP que j’ai découvert
				durant un bilan de compétences approfondi l’an dernier, j’ai pu définir
				et solidifier mon projet professionnel et enfin avancer.
			</p>

			<p>
				Forte d’une première approche avec un BAC +2 TP développeur web et web
				mobile, j’ai pu découvrir que j’aimais autant le front-end que le
				back-end ; je veux tout connaître, tout apprendre. Je souhaite ainsi
				inscrire mon parcours dans la durée et vous proposer mes compétences et
				mon enthousiasme pour un poste en alternance.
			</p>
			<p>
				Nationalité française
				<br />
				Chemin du Petit Four
				<br />
				06600 Antibes
			</p>
			<h5>Compétences</h5>
			<ul>
				<li>Résolutions de problèmes</li>
				<li>Curiosité</li>
				<li>Esprit critique</li>
				<li>Gestion du temps</li>
				<li>Gestion du stress</li>
			</ul>
			<h5>Logiciels</h5>
			<ul>
				<li>Photoshop / Indesign</li>
				<li>Word / Excel / Powerpoint / Outlook</li>
				<li>Maximizer / Smarter Track</li>
				<li>Quickbooks / Sage</li>
			</ul>
			<h5>Hobbies</h5>
			<p>
				Photographie (participation aux concours et expositions), manipulation
				d’images avec Photoshop, dessin, peinture.
			</p>
			<h5>Projets de formation</h5>
			<button>GitHub</button>
			<h5>Parcours Développement Web</h5>
			<h6>2023 : BAC +2 TP développeur web et web mobile</h6>
			<p>Le Bocal Academy (Nice) </p>
			<p>
				En cours d'apprentissage : HTML, CSS, Javascript, React, Wordpress, PHP,
				MySQL, Laravel, gestion de projet agile (méthode SCRUM)
			</p>

			<h6>
				2023-2024 : BAC +3/4 TP Développement d’Application Web & DevOps
				(alternance)
			</h6>
			<p>Le Bocal Academy (Nice)</p>
			<p>
				Au programme : système et réseau, Linux, sécurité, conception et
				architecture, JavaScript, React, Vue.js, NodeJS, Express et MongoDB,
				MySQL, PHP, Laravel, Jakarta EE, React Native...
				<br />
				Programme complet disponible sur demande
			</p>
			<Footer />
		</div>
	);
}
export default Cv;
