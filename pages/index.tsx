/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import BestSellers from "../components/BestSellers";
import Values from "../components/Values";
import Email from "../components/Email";
import Footer from "../components/Footer";
import { shopifyQuery } from "../utils/shopifyQuery";
import { CartType, ProductType } from "../utils/types";
import { updateLocal, addToCart, removeLine, updateLine } from "../utils/cartHelpers";

const Home: NextPage = ({ shopify }: any) => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [localCart, setLocalCart] = useState<CartType>({
		checkoutUrl: "",
		id: "",
		totalAmount: 0,
		lines: [],
	});

	useEffect(() => {
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
		<div
			css={css`
				width: 100vw;
			`}
		>
			<Nav localCart={localCart} setLocalCart={setLocalCart} removeLine={removeLine} updateLine={updateLine} />
			<Landing />
			<BestSellers addToCart={addToCart} localCart={localCart} setLocalCart={setLocalCart} products={products} />
			<Values />
			<Email />
			<Footer />
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

export default Home;
