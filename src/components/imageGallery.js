// Import libraries
import React from "react";

import "../static/css/imageGallery.css"

import imageProduct from "../static/images/image-product-1.jpg";

class productInfo {
	constructor(parameters) {
		this.name = parameters.name
		this.description = parameters.description
		this.price = parameters.price
		this.tags = parameters.tags
		this.discount = parameters.discount
		this.images = parameters.images
	}
}

const importData = (location) => {

	const data = import("../static/data/product1.json");
	console.log(data)

	return new productInfo({
		name: data.name || "Product",
		description: data.description || "Description",
		price: data.price || 9999999,
		tags: data.tags || ["Men", "Women"],
		discount: data.discount || 0,
		images: data.images || false
	})
}

const ImageGallery = (props) => {

	const productData = importData("../static/data/product1.json")
	/*
	if (productData.images === false) {

	}
	else if (productData.images === true) {}
	else {
		for (let i = 0; i < productData.images.length; i++) {
			//let imageCache = [];
		}
	}*/

	let htmlTemplate = (
			<div className="previewContainer">
				<img className="imagePreview"src={imageProduct} alt="Product 1"/>
				{productData.name}
			</div>
	);

	return (
		<>
			{htmlTemplate}
		</>
	)
}

export default ImageGallery;