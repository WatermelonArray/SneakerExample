class product {
	constructor(parameters) {
		this.name = parameters.name
		this.description = parameters.description
		this.price = parameters.price
		this.tags = ["Men", "Women"]
		this.discount = parameters.discount || 0 // in percent
		this.images = parameters.images || false // false returns default
	}
}

export default product