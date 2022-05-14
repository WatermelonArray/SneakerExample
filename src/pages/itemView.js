import React, { useRef } from "react";

import { Button } from "../components/button";
import { Selector } from "../components/selector";
import { ImagePreview, ImageGallery } from "../components/imageGallery";
import { ItemBrand, ItemName, ItemDescription, ItemPrice, ItemDiscountPrice} from "../components/itemDescription"


//import Button from "../components/button";

import "../static/css/itemView.css"



const ItemView = () => {

	const amountRef = useRef(null);

	const addToCart = (item) => {
		const data = localStorage.getItem("cart");
		let cart = [];

		if (data !== null) {
			cart = Object.keys(JSON.parse(data));
		}
		
		cart.push(
			{id: item, amount: amountRef.current.state.count}
		)

		localStorage.setItem("cart", JSON.stringify(cart))
	}

	return (
		<div className="itemViewFlex">
			<div className="gridLayoutLeft">
				<ImagePreview id={0} />
				<ImageGallery id={0} />
			</div>
			<div className="gridLayoutRight">
				<ItemBrand id={0} />
				<ItemName id={0} />
				<ItemDescription id={0} />
				<div className="priceHolder">
					<ItemPrice id={0} />
					<ItemDiscountPrice id={0} />
				</div>
				<div className="addCart">
					<Selector ref={amountRef} />
					<Button callback={() => {addToCart(0)}} type="button" text="Add to cart" styleClass="addToCart" />
				</div>
			</div>
		</div>
	);
}

export default ItemView;