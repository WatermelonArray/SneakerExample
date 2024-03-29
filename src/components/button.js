import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "../static/css/button.css";

const Button = (props) => {


	if (props.type === "button") { 
		return (
			<>
				<button onClick={props.callback || null} ref={props.refVar || null} className={"button " + (props.styleClass || "")}>
					{props.text}
				</button>
			</>
		)
	}
	else if(props.type === "link") {
		return (
			<>
				<Link onClick={props.callback || null} ref={props.refVar || null} className={"button " + (props.styleClass || "")} to={props.to || "/"}>
					{props.text}
				</Link>
			</>
		)
	}
	else {
		return (
			<>
				<button onClick={props.callback || null} ref={props.refVar || null} className={"button " + (props.styleClass || "")}>
					{props.text}
				</button>
			</>
		)
	}
}

export { Button }