import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Import products.json
import products from "../static/data/products.json"

import svgTrash from "../static/svgs/trash.svg";

import "../static/css/cartContents.css";

const getCart = () => {
	const data = localStorage.getItem("cart");

	if (data !== null) {
		return Object.values(JSON.parse(data));
	}
	else {
		return null;
	}
}

class CartContents extends React.Component {

	constructor() { 
		super();
		this.state = {cart: getCart()};
		
		this.callbackState = () => {

			this.setState({"cart": this.state.cart});
		}
	}

	removeItem = (index) => {

		let newCart = this.state.cart;
		this.state.cart.splice(index, 1)

		localStorage.setItem("cart", JSON.stringify(newCart));

		if (newCart.length === 0) {
			newCart = null;
			localStorage.removeItem("cart");
			this.props.callback();
		}

		this.setState({"cart": newCart});
	
	};
	
	render() {
		if (this.state.cart !== null) {

		return (
			<>
				{this.state.cart.map((value, index) => (
					<div key={index} className="itemFlex">
						<img className="productImage" src={process.env.PUBLIC_URL + products[value.id].images[0]} />
						<div className="itemDescription">
							<p className="itemTextThin">{products[value.id].name}</p>
							<div className="itemPriceFlex">
								<p className="itemTextThin">${
									products[value.id].price
									- (products[value.id].price / 100 * products[value.id].discount)
									} x {value.amount}
								</p>
								<p className="itemTextBold">${
									(
										products[value.id].price
										- (products[value.id].price / 100 * products[value.id].discount)
									)
									* value.amount
								}
								</p>
							</div>
						</div>
						<div className="itemTrash">
							<img src={svgTrash} onClick={() => {this.removeItem(index)}} className="cartSVG" alt="Cart"></img>
						</div>
					</div>
				))}
			</>
		)
	}
	else {return(<></>)}
	};
};

export default CartContents