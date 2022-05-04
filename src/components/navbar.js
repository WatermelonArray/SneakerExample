import React from "react";
import { Outlet, Link } from "react-router-dom";
import svgLogo from "../static/svgs/logo.svg";
import svgCart from "../static/svgs/cart.svg";
import svgBurger from "../static/svgs/burger.svg";
import svgProfile from "../static/images/image-avatar.png";
import "../css/index.css";
import "../css/navbar.css"


function Navbar() {
	return (
		<>
		<nav className="navbar">
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
			</style>
			<button className="hamburger">
				<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill-rule="evenodd"/></svg>
			</button>
			<div className="navbarLogo">
				<Link to="/">
					<img src={svgLogo} alt="sneakers"></img>
				</Link>
			</div>
			<ul className="pageLinks">
				<li>
					<Link className="topbarLinks" to="/collections">Collections</Link>
				</li>
				<li className="topbarLinks">Men</li>
				<li className="topbarLinks">Women</li>
				<li className="topbarLinks">About</li>
				<li className="topbarLinks">Contact</li>
			</ul>
			<ul className="rightContent">
				<li className="topbarRight">
					<Link className="topbarText" to="/collections">
						<img src={svgCart} alt="Cart"></img>
					</Link>
				</li>
				<li className="topbarRight">
					<Link className="topbarText" to="/collections">
					<img className="imageProfile" src={svgProfile} alt="Account"></img>
					</Link>
				</li>
			</ul>
			<Outlet />
		</nav>
		<div className="navbarLine" />
		</>
	)
}

export default Navbar