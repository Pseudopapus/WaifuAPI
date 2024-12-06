import React from "react";
import { Outlet } from 'react-router-dom';
import s from "./mainLayout.module.css";
import Footer from "../../component/footer/Footer";

export default function MainLayout () {
	return(
		<>
			<header className="center">
				<h2>WaifuAPI</h2>
			</header>
			<main>
				<Outlet/>
			</main>
			<Footer/>
		</>
	);
}