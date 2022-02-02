	export const initialiseCart = (setLocalCart: Function) => {
		const storage = window.localStorage;
		let cart: any = storage.getItem("nonameCart");
		//if cart doesnt exist create one save cart in state
		const createCart = async () => {
			const res = await fetch("http://localhost:3000/api/cart", { method: "POST", body: "" });
			const resNew = await res.json();
			if (resNew.data.cartCreate) {
				updateLocal(resNew.data.cartCreate.cart, setLocalCart);
			}
		};
		if (!cart) {
			//create cart, have to do this for async function
			const createCartFunction = async () => {
				await createCart();
			};
			createCartFunction();
		} else {
			//get local storage
			const parsedCart = JSON.parse(cart);
			//check if its expired (1 day)
			const timeExpired = Math.floor(Date.now() - parsedCart.created);
			const days: number = timeExpired / (1000 * 60 * 60 * 24);
			console.log(days);
			if (days > 1) {
				//remove local storage and refresh
				storage.removeItem("nonameCart");
				window.location.reload();
			} else {
				const getCart = {
					checkoutUrl: parsedCart.checkoutUrl,
					id: parsedCart.id,
					totalAmount: parsedCart.totalAmount,
					lines: parsedCart.lines,
				};
				setLocalCart(getCart);
			}
		}
	}
	
	//save new cart in state and update local storage
	export const updateLocal = (resNew: any, setLocalCart: Function) => {
		const newCart = {
			checkoutUrl: resNew.checkoutUrl,
			id: resNew.id,
			totalAmount: parseInt(resNew.estimatedCost.totalAmount.amount),
			lines: resNew.lines.edges,
		};

		//need to track time to remove from local storage if its been too long
		const newCartLocalStorage = {
			checkoutUrl: resNew.checkoutUrl,
			id: resNew.id,
			totalAmount: parseInt(resNew.estimatedCost.totalAmount.amount),
			lines: resNew.lines.edges,
			created: Date.now()
		};

		setLocalCart(newCart);
		window.localStorage.setItem("nonameCart", JSON.stringify(newCartLocalStorage));
	};

	export const addToCart = async (e: any, cartId: string, merchId: string, quantity: number, setLocalCart: Function) => {
		e.stopPropagation();
		const res = await fetch("http://localhost:3000/api/cart", { method: "POST", body: JSON.stringify({ cartId, merchId, quantity }) });
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