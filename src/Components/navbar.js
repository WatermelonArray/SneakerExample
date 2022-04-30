import React from "react";
import ReactDOM from "react-dom/client";
import { NavLink } from "react-router-dom";
import svg from "./logo.svg"
import "./navbar.css"

function Navbar() {
	return (
		<header>
			<div className="Navbar">
				
				<div className="navbarLogo">
					<img src={svg} alt="logo :("></img>
				</div>
				<NavLink to="/Collections">Collections</NavLink>
				<ul className="links">
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
					<li>Account</li>
				</ul>
			</div>
		</header>
	)
}


export default Navbar