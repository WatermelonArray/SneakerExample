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
			currentIndex: 0,
			selectedArray: [],
			album: []
		}
		this.id = props.id;
		this.data = products[this.id];
		
		for (let i = 0; i < this.data.images.length; i++) {
			this.state.album.push(this.data.images[i]);
		};

		this.state.refs.fullscreenRef = React.createRef();

	}

	classResult = (index) => {

		let result = "imageSmall";

		if (this.state.currentIndex === index) {
			result = result + " imageSelected"
		}

		return result;
	}
	changeToImage = (index) => {

			this.state.refs.imgRef1.current.src = process.env.PUBLIC_URL + products[this.id].images[index]
			this.state.refs.imgRef1.current.alt = "Product " + index
			this.setState({"currentIndex": index});
			
	}

	smallGallery1 = (index) => {

		return (<img 
			key={index}
			onClick={this.changeToImage.bind(this.state.refs.imgRef1, index)}
			className={this.classResult(index)}
			src={process.env.PUBLIC_URL + products[this.id].images[index]}
			alt={"Product_" + index}
		/>)
	}
	changeImage1 = (dir) => {

		if (dir === "right") {this.state.currentIndex++;}
		else if (dir === "left") {this.state.currentIndex--;}

		if (this.state.currentIndex >= products[this.id].images.length) { this.state.currentIndex = 0 }
		if (this.state.currentIndex < 0) { this.state.currentIndex = products[this.id].images.length - 1}
		this.state.refs.imgRef1.current.src = process.env.PUBLIC_URL + products[this.id].images[this.state.currentIndex]
		this.state.refs.imgRef1.current.alt = "Product " + this.state.currentIndex
	}
	/*
	const openFullScreen = () => {
		fullscreenRef.current.style.opacity = "100%";
		fullscreenRef.current.style["pointer-events"] = "all";
	};

	const closeFullscreen = () => {
		fullscreenRef.current.style.opacity = "0%";
		fullscreenRef.current.style["pointer-events"] = "none";
	};
	*/

	// https://stackoverflow.com/questions/65329431/how-to-properly-use-ref-with-a-react-class-component-and-styled-components
	
	getAlbum = () => {
		
	}

	render() {
		

		

		this.state.refs.imgRef1 = React.createRef();

		if (products[this.id].images !== true || products[this.id].images !== false) {
			return (
				<>
					<div className="previewFlex">
						<button onClick={() => {this.changeImage1("left")}} className="imageButtonLeft">{"<"}</button>
						<img ref={this.state.refs.imgRef1} className="imagePreview" src={process.env.PUBLIC_URL + this.data.images[0]} alt="Product 1" />
						<button onClick={() => {this.changeImage1("right")}} className="imageButtonRight">{">"}</button>
					</div>
					<div className={"albumFlex"}>
						{this.state.album.map((value, index) => { return this.smallGallery1(index) })}
					</div>
					{/*<div ref={fullscreenRef} className="previewFlexFULL">
						<img onClick={closeFullscreen} className="closeFULL" src={svgClose} alt="close" />
						<img ref={imgRef2} className="imagePreviewFULL" src={process.env.PUBLIC_URL + data.images[0]} alt="Product 1" />
						<button onClick={() => {currentPos = changeImage(props.id, currentPos, "left", imgRef2)}} className="imageButtonLeftFULL">{"<"}</button>
						<button onClick={() => {currentPos = changeImage(props.id, currentPos, "right", imgRef2)}} className="imageButtonRightFULL">{">"}</button>

						<div className={"albumFlexFULL"}>
							{/*{album.map((value, index) => (<img key={index} onClick={changeToImage(props.id, index, imgRef2, changeCurrent)} className={() => {checkSelectClass(index, currentSelect)}} src={process.env.PUBLIC_URL + value} alt={"Product_" + index} />))}}
						</div>
				</div>*/}
				</>
			)
		}
	}
}

export {ImagePreview};