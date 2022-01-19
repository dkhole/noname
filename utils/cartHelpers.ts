	//save new cart in state and update local storage
	export const updateLocal = (resNew: any, setLocalCart: Function) => {
		const newCart = {
			checkoutUrl: resNew.checkoutUrl,
			id: resNew.id,
			totalAmount: parseInt(resNew.estimatedCost.totalAmount.amount),
			lines: resNew.lines.edges,
		};
		setLocalCart(newCart);
		window.localStorage.setItem("nonameCart", JSON.stringify(newCart));
	};

	export const addToCart = async (e: any, cartId: string, merchId: string, setLocalCart: Function) => {
		e.stopPropagation();
		const res = await fetch("http://localhost:3000/api/cart", { method: "POST", body: JSON.stringify({ cartId: cartId, merchId: merchId }) });
		const resNew = await res.json();
		if (resNew.data.cartLinesAdd) {
			updateLocal(resNew.data.cartLinesAdd.cart, setLocalCart);
		}
	};

	export const removeLine = async (e: any, cartId: string, lineId: string, setLocalCart: Function) => {
		e.stopPropagation();
		const res = await fetch("http://localhost:3000/api/cart", { method: "DELETE", body: JSON.stringify({ cartId, lineId }) });
		const resNew = await res.json();
		if (resNew.data.cartLinesRemove) {
			updateLocal(resNew.data.cartLinesRemove.cart, setLocalCart);
		}
	};

	export const updateLine = async(e: any, cartId: string, lineId: string, quantity: number, setLocalCart: Function) => {
		e.stopPropagation();
		const res = await fetch("http://localhost:3000/api/cart", { method: "PUT", body: JSON.stringify({ cartId, lineId, quantity }) });
		const resNew = await res.json();
		if (resNew.data.cartLinesUpdate) {
			updateLocal(resNew.data.cartLinesUpdate.cart, setLocalCart);
		}
	}