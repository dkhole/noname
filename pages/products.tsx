/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import beef from "../imgs/beef.png";
import { CartType } from "../utils/types";

export default function Products() {
	const [localCart, setLocalCart] = useState<CartType>({	
		checkoutUrl: "",
		id: "",
		lines: undefined});
	
	//save new cart in state and update local storage
	const updateLocal = (resNew: CartType) => {
		setLocalCart(resNew);
		window.localStorage.setItem('nonameCart', JSON.stringify(resNew))
	}

	const addToCart = async(e: any, cartId: string, merchId: string) => {
		e.stopPropagation();
		const res = await fetch('http://localhost:3000/api/cart', {method: "POST", body: JSON.stringify({cartId: cartId, merchId: merchId})});
		const resNew = await res.json();
		if(resNew.data.cartLinesAdd) {
			updateLocal(resNew.data.cartLinesAdd.cart);
		}
	}

	useEffect(() => {
		const storage = window.localStorage;
		let cart: any = storage.getItem('nonameCart');
		//if cart doesnt exist create one save cart in state
		const createCart = async() => {
			const res = await fetch('http://localhost:3000/api/cart',{method: 'POST', body: ''});
			const resNew = await res.json();
			if(resNew.data.cartCreate) {
				updateLocal(resNew.data.cartCreate.cart);
			}
		}
		if (!cart) {
			//create cart, have to do this for async function
			const createCartFunction = async () => {
				await createCart();
			}
			createCartFunction();		
		} else {
			//save in local state
			const parsedCart = JSON.parse(cart);
			setLocalCart(parsedCart);
		}
	}, []);
	
	return (
		<div>
			<Nav localCart={localCart}/>
			<div
				css={css`
					padding: 0 35px;
					padding-top: 110px;
					font-family: Montserrat;
					text-align: center;
				`}
			>
				<h1
					css={css`
						margin: 0;
						padding: 0;
						font-weight: 600;
						font-size: 27px;
					`}
				>
					All Products
				</h1>
				<div>
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
				</div>
			</div>
		</div>
	);
}
