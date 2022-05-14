import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Import products.json
import products from "../static/data/products.json"

import svgTrash from "../static/svgs/trash.svg";

import "../static/css/cartContents.css";


localStorage.setItem("cart", JSON.stringify({
	"0": {id: 0, amount: 2},
	"1": {id: 0, amount: 2},
	"2": {id: 0, amount: 2}
}))

/*localStorage.removeItem("cart");*/

const CartContents = (props) => {

	const removeItem = (index) => {

		const data = localStorage.getItem("cart");

		let cart = Object.values(JSON.parse(data));

		console.log(cart)
		cart.splice(index, 1)
		console.log(cart)

		localStorage.setItem("cart", cart);

	}

	const data = localStorage.getItem("cart");

	const trashCVGRef = useRef(null)

	if (data !== null) {

		const cart = Object.values(JSON.parse(data));

		return (
			<>
				{cart.map((value, index) => (
					<>
						<div className="itemFlex">
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
								<img ref={trashCVGRef} src={svgTrash} onClick={() => {props.callback(index)}} className="cartSVG" alt="Cart"></img>
							</div>
						</div>
					</>
				))}
			</>
		)
	}
	else {return(<></>)}
}

export default CartContents