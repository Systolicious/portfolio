import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Erreur from "./components/navigation/erreur";
import Home from "./components/pages/home";
import Bonus from "./components/pages/bonus";
import Contact from "./components/pages/contact";
import Champignons from "./components/pages/champignons";
import Etoiles from "./components/pages/etoiles";
import Fleurs from "./components/pages/fleurs";
import Portraits from "./components/pages/portraits";
import Art from "./components/pages/art";
import Vanites from "./components/pages/vanites";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Erreur />,
	},
	{
		path: "/art",
		element: <Art />,
		errorElement: <Erreur />,
	},
	{
		path: "/bonus",
		element: <Bonus />,
		errorElement: <Erreur />,
	},
	{
		path: "/champignons",
		element: <Champignons />,
		errorElement: <Erreur />,
	},
	{
		path: "/contact",
		element: <Contact />,
		errorElement: <Erreur />,
	},
	{
		path: "/etoiles",
		element: <Etoiles />,
		errorElement: <Erreur />,
	},
	{
		path: "/fleurs",
		element: <Fleurs />,
		errorElement: <Erreur />,
	},
	{
		path: "/portraits",
		element: <Portraits />,
		errorElement: <Erreur />,
	},
	{
		path: "/vanites",
		element: <Vanites />,
		errorElement: <Erreur />,
	},
]);
