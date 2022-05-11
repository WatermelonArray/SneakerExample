import React from "react";

import { Button } from "../components/button";
import { Selector } from "../components/selector";
import { ImagePreview, ImageGallery } from "../components/imageGallery";
import { ItemBrand, ItemName, ItemDescription, ItemPrice, ItemDiscountPrice} from "../components/itemDescription"


//import Button from "../components/button";

import "../static/css/itemView.css"

// Variables
//let currentProduct

function ItemView() {
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
					<Selector />
					<Button type="button" text="Add to cart" />
				</div>
			</div>
		</div>
	);
}

export default ItemView;