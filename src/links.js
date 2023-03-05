import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Erreur from "./components/navigation/erreur";
import Home from "./components/pages/home";
import Bonus from "./components/pages/bonus";
import Contact from "./components/pages/contact";
import Cv from "./components/pages/cv";
import Galerie from "./components/pages/galerie";
import Mignonneries from "./components/pages/mignonneries";
import Photos from "./components/pages/photos";
import Vanites from "./components/pages/vanites";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Erreur />,
	},
	{
		path: "/bonus",
		element: <Bonus />,
		errorElement: <Erreur />,
	},
	{
		path: "/contact",
		element: <Contact />,
		errorElement: <Erreur />,
	},

	{
		path: "/cv",
		element: <Cv />,
		errorElement: <Erreur />,
	},
	{
		path: "/galerie",
		element: <Galerie />,
		errorElement: <Erreur />,
	},
	{
		path: "/mignonneries",
		element: <Mignonneries />,
		errorElement: <Erreur />,
	},
	{
		path: "/photos",
		element: <Photos />,
		errorElement: <Erreur />,
	},
	{
		path: "/vanites",
		element: <Vanites />,
		errorElement: <Erreur />,
	},
]);
