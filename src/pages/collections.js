import React from "react";

import { Button } from "../components/button";

import "../static/css/collections.css";

function collections() {
	return (
		<div className="collectionsFlex">
			<Button type="link" to="/SneakerExample/itemView" text="View item" styleClass="collections"/>
		</div>
	);
}

export default collections;