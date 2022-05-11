// Import libraries
import React from "react";

// Import css
import "../static/css/imageGallery.css"

// Import products.json
import products from "../static/data/products.json"

const ImageGallery = (props) => {
	const id = props.id;
	const data = products[id];
	let album = [];

	for (let i = 0; i < data.images.length; i++) {
		album.push(data.images[i])
	}

	return (
		<div className="albumFlex">
			{album.map((value, index) => (<img className="imageSmall imageNotSelect" src={process.env.PUBLIC_URL + value} alt={"Product_" + index} />))}
		</div>
	)
}
const ImagePreview = (props) => {
	const id = props.id;
	const data = products[id];

	if (products[id].images !== true || products[id].images !== false) {
		return (
			<img className="imagePreview" src={process.env.PUBLIC_URL + data.images[0]} alt="Product 1"/>
		)
	}
}

/*const ImageGallery = (props) => {
	const id = props.id
	return (
		<>
			{Preview(id)}
			
				{LowerGallery(id)}
			</div>
		</>
	);
}*/

export {ImagePreview, ImageGallery};