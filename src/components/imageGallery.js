// Import libraries
import React from "react";

import "../static/css/imageGallery.css"

import products from "../static/data/products.json"

const LowerGallery = (id) => {
	const data = products[id];
	let album = [];

	for (let i = 0; i < data.images.length; i++) {
		album.push(data.images[i])
	}

	return album.map((value, index) => {
		return <img className="imageSmall" src={process.env.PUBLIC_URL + value} alt={"Product_" + index} />
	})
}
const Preview = (id) => {
	const data = products[id];

	if (products[id].images !== true || products[id].images !== false) {
		return <img className="imagePreview" src={process.env.PUBLIC_URL + data.images[0]} alt="Product 1"/>
	}
}

const ImageGallery = (props) => {
	const id = props.id
	return (
		<>
			{Preview(id)}
			<div className="albumFlex">
				{LowerGallery(id)}
			</div>
		</>
	);
}

export default ImageGallery;