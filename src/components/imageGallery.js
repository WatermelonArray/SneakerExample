// Import libraries
import React  from "react";

// Import css
import "../static/css/imageGallery.css"

import svgClose from "../static/svgs/close.svg";

// Import products.json
import products from "../static/data/products.json"

const checkSelectClass = (index, statement) => {

	const result = statement[index] === true

	if (result) { return "imageSmall imageSelected" }
	else { return "imageSmall"}
}

class ImagePreview extends React.Component {
	
	constructor(props) {
		super();

		this.state = {
			refs: {},
			currentIndex1: 0,
			currentIndex2: 0,
			album: []
		}
		this.id = props.id;
		this.data = products[this.id];
		
		for (let i = 0; i < this.data.images.length; i++) {
			this.state.album.push(this.data.images[i]);
		};

		this.state.refs.fullscreenRef = React.createRef();

	}

	classResult = (index, fullscreen) => {

		let result = "imageSmall";

		if (fullscreen === false && this.state.currentIndex1 === index) {
			result = result + " imageSelected"
		}
		else if (fullscreen === true && this.state.currentIndex2 === index) {
			result = result + " imageSelected"
		}

		return result;
	}
	changeToImage = (index, fullscreen) => {

		if (fullscreen === false) {
			this.state.refs.imgRef1.current.src = process.env.PUBLIC_URL + products[this.id].images[index]
			this.state.refs.imgRef1.current.alt = "Product " + index
			this.setState({"currentIndex1": index});
		}
		else if (fullscreen === true) {
			this.state.refs.imgRef2.current.src = process.env.PUBLIC_URL + products[this.id].images[index]
			this.state.refs.imgRef2.current.alt = "Product " + index
			this.setState({"currentIndex2": index});
		}
	}

	smallGallery = (index, fullscreen) => {

		if (fullscreen === false) {
			return (<img 
				key={index}
				onClick={this.changeToImage.bind(this.state.refs.imgRef1, index, fullscreen)}
				className={this.classResult(index, fullscreen)}
				src={process.env.PUBLIC_URL + products[this.id].images[index]}
				alt={"Product_" + index}
			/>)
		}
		else if (fullscreen === true) {
			return (<img 
				key={index}
				onClick={this.changeToImage.bind(this.state.refs.imgRef2, index, fullscreen)}
				className={this.classResult(index, fullscreen)}
				src={process.env.PUBLIC_URL + products[this.id].images[index]}
				alt={"Product_" + index}
			/>)
		}
	}
	changeImage = (dir, fullscreen) => {

		if (fullscreen === false) {
			if (dir === "right") {this.state.currentIndex1++;}
			else if (dir === "left") {this.state.currentIndex1--;}

			if (this.state.currentIndex1 >= products[this.id].images.length) { this.state.currentIndex1 = 0 }
			if (this.state.currentIndex1 < 0) { this.state.currentIndex1 = products[this.id].images.length - 1}
			this.state.refs.imgRef1.current.src = process.env.PUBLIC_URL + products[this.id].images[this.state.currentIndex1]
			this.state.refs.imgRef1.current.alt = "Product " + this.state.currentIndex1
		}
		else if (fullscreen === true) {
			if (dir === "right") {this.state.currentIndex2++;}
			else if (dir === "left") {this.state.currentIndex2--;}

			if (this.state.currentIndex2 >= products[this.id].images.length) { this.state.currentIndex2 = 0 }
			if (this.state.currentIndex2 < 0) { this.state.currentIndex2 = products[this.id].images.length - 1}
			this.state.refs.imgRef2.current.src = process.env.PUBLIC_URL + products[this.id].images[this.state.currentIndex2]
			this.state.refs.imgRef2.current.alt = "Product " + this.state.currentIndex2
		}
	}
	openFullScreen = () => {
		this.state.refs.fullscreenRef.current.style.opacity = "100%";
		this.state.refs.fullscreenRef.current.style["pointer-events"] = "all";

		this.state.refs.imgRef2.current.src = process.env.PUBLIC_URL + products[this.id].images[0]
		this.state.refs.imgRef2.current.alt = "Product 0"
		this.setState({"currentIndex2": 0})
	};
	
	closeFullscreen = () => {
		this.state.refs.fullscreenRef.current.style.opacity = "0%";
		this.state.refs.fullscreenRef.current.style["pointer-events"] = "none";
	};

	render() {
		
		this.state.refs.imgRef1 = React.createRef();
		this.state.refs.imgRef2 = React.createRef();

		if (products[this.id].images !== true || products[this.id].images !== false) {
			return (
				<>
					<div className="previewFlex">
						<button onClick={() => {this.changeImage("left", false)}} className="imageButtonLeft">{"<"}</button>
						<img ref={this.state.refs.imgRef1} onClick={this.openFullScreen} className="imagePreview" src={process.env.PUBLIC_URL + this.data.images[0]} alt="Product 1" />
						<button onClick={() => {this.changeImage("right", false)}} className="imageButtonRight">{">"}</button>
					</div>
					<div className={"albumFlex"}>
						{this.state.album.map((value, index) => { return this.smallGallery(index, false) })}
					</div>
					<div ref={this.state.refs.fullscreenRef} className="previewFlexFULL">
						<img onClick={this.closeFullscreen} className="closeFULL" src={svgClose} alt="close" />
						<img ref={this.state.refs.imgRef2} className="imagePreviewFULL" src={process.env.PUBLIC_URL + this.data.images[0]} alt="Product 1" />
						<button onClick={() => {this.changeImage("left", true)}} className="imageButtonLeftFULL">{"<"}</button>
						<button onClick={() => {this.changeImage("right", true)}} className="imageButtonRightFULL">{">"}</button>

						<div className={"albumFlexFULL"}>
							{this.state.album.map((value, index) => { return this.smallGallery(index, true) })}
						</div>
				</div>
				</>
			)
		}
	}
}

export {ImagePreview};