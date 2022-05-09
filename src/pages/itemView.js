import React from "react";

import ImageGallery from "../components/imageGallery";

//import Button from "../components/button";

import "../static/css/itemView.css"

// Variables
//let currentProduct

function ItemView() {
	return (
		<>
			<div className="gridLayoutLeft">
				<ImageGallery id={0} />
			</div>
			<div className="gridLayoutRight">
				
			</div>
		</>
	);
}

export default ItemView;