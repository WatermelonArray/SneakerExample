// Import libraries
import React from "react";

// Import css
import "../static/css/itemInfo.css"

// Import products.json
import products from "../static/data/products.json"

const discountPrice = (discount, price) => {

	if (discount !== 0) {
		const discountPrice = (price) - (price / 100 * discount)

		return (
			<div className="priceFlex">
				<h1 className="textPrice">${discountPrice}.00</h1>
				<div className="discountBox">{discount}%</div>
			</div>
		)
	} 
	else {
		return (
			<h1 className="textPrice">${price}.00</h1>
		)
	}
}


const ItemBrand = (props) => {return ( <p className="textBrand">{
	(products[props.id].brand).toUpperCase()
	|| "ITEMBRAND"
}</p> )}

const ItemName = (props) => {return ( <h1 className="textName">{
	products[props.id].name
	|| "ItemName"
}</h1> )}

const ItemDescription = (props) => {return ( <p className="textDesc">{
	products[props.id].description
	|| "ItemDesc"
}</p> )}

const ItemPrice = (props) => {return ( <h1 className="textPrice">{
	discountPrice(products[props.id].discount, products[props.id].price)
}</h1> )}

const ItemDiscountPrice = (props) => {return ( <p className="textDiscount">${
	products[props.id].price
	|| "$8,999,999"
}.00</p> )}

export { ItemBrand, ItemName, ItemDescription, ItemPrice, ItemDiscountPrice }