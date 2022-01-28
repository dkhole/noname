// type lines = {
// 	edges: Array<object>
// }

export type CartType = {
	checkoutUrl: string,
	id: string,
	totalAmount: number,
	lines: Array<object>,
}

export type ProductType = {
	id: string,
	title: string,
	description: string,
	merchId: string,
	price: number,
	img: any
}