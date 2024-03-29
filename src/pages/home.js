import React from "react";

import { Button } from "../components/button";

import svgLogo from "../static/svgs/logo.svg";

import "../static/css/home.css";

function home() {
	return (
		<>
			<div className="home">
				<img className="logoBig" src={svgLogo} alt="sneakers"></img>
				<Button type="link" to="/SneakerExample/collections" text="View Collections" styleClass={"homepage"} />
			</div>
		</>
	)
}

export default home;