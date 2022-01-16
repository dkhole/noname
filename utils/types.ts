type lines = {
	edges: Array<object>
}

export type CartType = {
	checkoutUrl: string,
	id: string,
	lines?: lines,
}

export type ProductType = {
	id: string,
	title: string,
	description: string,
	merchId: string,
	price: number
}