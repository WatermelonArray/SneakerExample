// Import libraries
import React, { useRef } from "react";
import { Outlet, Link } from "react-router-dom";

import svgLogo from "../static/svgs/logo.svg";
import svgCart from "../static/svgs/cart.svg";
import svgBurger from "../static/svgs/burger.svg";
import svgProfile from "../static/images/image-avatar.png";

import CartContents from "./cartContents";

import { Button } from "../components/button";

import "../static/css/navbar.css"

let navbarOpen = false;
let cartOpen = false;

const Navbar = () => {

	const pageLinkRef = useRef(null);
	const hamburgerRef = useRef(null);
	const darkRef = useRef(null);
	const cartCVGRef = useRef(null);
	const cartBoxRef = useRef(null);
	const cartContainerRef = useRef(null);
	const cartEmptyRef = useRef(null);

	function toggleCart() {
		cartOpen = !cartOpen;
		
		if (cartOpen === false) {
			cartBoxRef.current.style.opacity = "0%";
			cartBoxRef.current.style.top = "70px";
		}
		else {
			cartBoxRef.current.style.opacity = "100%";
			cartBoxRef.current.style.top = "80px";

			if (localStorage.getItem("cart") === null) {
				cartEmptyRef.current.style.display = "block";
				cartContainerRef.current.style["justify-content"] = "center";
			}
			else {
				cartEmptyRef.current.style.display = "none";
				cartContainerRef.current.style["justify-content"] = "flex-start";
			}
			
		}
	}
	function closeCart() {
		cartOpen = false;
		cartBoxRef.current.style.opacity = "0%";
		cartBoxRef.current.style.top = "70px";
	}
	function toggleNavbar() {
		navbarOpen = !navbarOpen
		if (navbarOpen === false) {
			pageLinkRef.current.className = "pageLinksClose";
			hamburgerRef.current.className = "hamburgerSVG";
			pageLinkRef.current.style.transition = "0.2s";
			darkRef.current.style.opacity = "0%";
		}
		else {
			pageLinkRef.current.className = "pageLinks";
			hamburgerRef.current.className = "hamburgerSVGOpen";
			hamburgerRef.current.style.fill = "hsl(223, 64%, 98%)";
			darkRef.current.style.opacity = "75%";
		}
	}
	function closeNavbar() {
		closeCart();
		navbarOpen = false;
		pageLinkRef.current.className = "pageLinksClose";
		hamburgerRef.current.className = "hamburgerSVG";
		pageLinkRef.current.style.transition = "0.2s";
		hamburgerRef.current.style.fill = "black";
		darkRef.current.style.opacity = "0%";
	}
	
	return (
		<>	
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
			</style>
	
			<div className="navbarOffset" />

			<nav className="navbar">
	
				<button onClick={toggleNavbar} className="hamburger">
					<img ref={hamburgerRef} src={svgBurger} className="hamburgerSVG" alt="Menu" />
				</button>
	
				<div className="navbarLogo">
					<Link to="/">
						<img onClick={closeNavbar} src={svgLogo} alt="sneakers"></img>
					</Link>
				</div>

				<ul ref={pageLinkRef} className="pageLinksClose">
					<li className="topbarLinks topbarLinksHome">
						<Link onClick={closeNavbar} className="topbarLinksStyle" to="/">Home</Link>
					</li>
					<li className="topbarLinks">
						<Link onClick={closeNavbar} className="topbarLinksStyle" to="/collections">Collections</Link>
					</li>
					<li onClick={closeNavbar} className="topbarLinks topbarLinksStyle">Men</li>
					<li onClick={closeNavbar} className="topbarLinks topbarLinksStyle">Women</li>
					<li onClick={closeNavbar} className="topbarLinks topbarLinksStyle">About</li>
					<li onClick={closeNavbar} className="topbarLinks topbarLinksStyle">Contact</li>
				</ul>

				<ul className="rightContent">
					<li className="topbarRight">
						<div onClick={toggleCart} className="topbarText" to="/collections">
							<img ref={cartCVGRef} src={svgCart} className="cartSVG" alt="Cart"></img>
						</div>
						<div ref={cartBoxRef} className="cartBox">
							<p className="cartTitle">Cart</p>
							<div className="cartLine" />
							<div ref={cartContainerRef} className="cartContainer">
								<p ref={cartEmptyRef} className="cartEmpty">Your cart is empty.</p>
								<CartContents />
							</div>
							<Button type="button" text="Checkout" />
						</div>
					</li>
					<li className="topbarRight">
						<Link className="topbarText" to="/collections">
							<img className="imageProfile" src={svgProfile} alt="Account"></img>
						</Link>
					</li>
				</ul>

				

				<div ref={darkRef} className="dark" />

				<Outlet />
			</nav>

			<div className="navbarLine" />
		</>
	)
}

export default Navbar