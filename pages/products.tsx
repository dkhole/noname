/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import beef from "../imgs/beef.png";
import { shopifyQuery } from "../utils/shopifyQuery";
import { CartType, ProductType } from "../utils/types";

const Products: NextPage = ({ shopify }: any) => {
	const [products, setProducts] = useState<[ProductType]>();
	const [localCart, setLocalCart] = useState<CartType>({
		checkoutUrl: "",
		id: "",
		totalAmount: 0,
		lines: [],
	});

	//save new cart in state and update local storage
	const updateLocal = (resNew: any) => {
		const newCart = {
			checkoutUrl: resNew.checkoutUrl,
			id: resNew.id,
			totalAmount: parseInt(resNew.estimatedCost.totalAmount.amount),
			lines: resNew.lines.edges,
		};
		setLocalCart(newCart);
		window.localStorage.setItem("nonameCart", JSON.stringify(newCart));
	};

	const addToCart = async (e: any, cartId: string, merchId: string) => {
		e.stopPropagation();
		const res = await fetch("http://localhost:3000/api/cart", { method: "POST", body: JSON.stringify({ cartId: cartId, merchId: merchId }) });
		const resNew = await res.json();
		if (resNew.data.cartLinesAdd) {
			updateLocal(resNew.data.cartLinesAdd.cart);
		}
	};

	const removeLine = async (e: any, cartId: string, lineId: string) => {
		e.stopPropagation();
		const res = await fetch("http://localhost:3000/api/cart", { method: "DELETE", body: JSON.stringify({ cartId, lineId }) });
		const resNew = await res.json();
		if (resNew.data.cartLinesRemove) {
			updateLocal(resNew.data.cartLinesRemove.cart);
		}
	};

	useEffect(() => {
		const storage = window.localStorage;
		let cart: any = storage.getItem("nonameCart");
		//if cart doesnt exist create one save cart in state
		const createCart = async () => {
			const res = await fetch("http://localhost:3000/api/cart", { method: "POST", body: "" });
			const resNew = await res.json();
			if (resNew.data.cartCreate) {
				updateLocal(resNew.data.cartCreate.cart);
			}
		};
		if (!cart) {
			//create cart, have to do this for async function
			const createCartFunction = async () => {
				await createCart();
			};
			createCartFunction();
		} else {
			//save in local state
			const parsedCart = JSON.parse(cart);
			setLocalCart(parsedCart);
		}
	}, []);

	useEffect(() => {
		const items = shopify.data.products.edges.map((prod: any) => {
			return {
				id: prod.node.id,
				title: prod.node.title,
				description: prod.node.description,
				merchId: prod.node.variants.edges[0].node.id,
				price: parseInt(prod.node.variants.edges[0].node.priceV2.amount),
			};
		});

		setProducts(items);
	}, [shopify.data.products.edges]);

	console.log(products);
	console.log(localCart);

	return (
		<div>
			<Nav localCart={localCart} removeLine={removeLine} />
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
					{products ? (
						products.map((product: ProductType, index: number) => {
							return <Card addToCart={addToCart} localCart={localCart} merchId={product.merchId} img={beef} title={product.title} description="Our #1 Pick for Picky Eaters!" price={product.price} key={index} />;
						})
					) : (
						<div></div>
					)}
					{/* <Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" />
					<Card addToCart={addToCart} localCart={localCart} merchId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDY4NjQyMDk1MTE5NA==" img={beef} title="BEEF + LAMB RECIPE" description="Our #1 Pick for Picky Eaters!" price="$7" /> */}
				</div>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts

	const query = `
	{
		products(first: 5) {
			edges {
				node {
					id
					title
					description
					variants(first: 1) {
						edges {
							node {
								id
								priceV2 {
									amount 
								}
							}
						}   
					}
        		}
      		}
    	}
  	}
	`;

	const shopify = await shopifyQuery(query, null);

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: { shopify },
	};
}

export default Products;
