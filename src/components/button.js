import React from "react";
import { Link } from "react-router-dom";

import "../static/css/button.css";

function Button(props) {
	if (props.type === "button") { 
		return (
			<>
				<button className="button">
					{props.text}
				</button>
			</>
		)
	}
	else if(props.type === "link") {
		return (
			<>
				<Link className="button" to={props.to || "/"}>
					{props.text}
				</Link>
			</>
		)
	}
	else {
		return (
			<>
				<button className="button">
					{props.text}
				</button>
			</>
		)
	}
}

export { Button }