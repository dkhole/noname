type lines = {
	edges: Array<object>
}

export type CartType = {
	checkoutUrl: string,
	id: string,
	lines?: lines,
}