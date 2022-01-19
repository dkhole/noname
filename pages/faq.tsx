/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import FaqInfo from "../components/FaqInfo";
import { removeLine, updateLine, updateLocal } from "../utils/cartHelpers";
import { shopifyQuery } from "../utils/shopifyQuery";
import { CartType, ProductType } from "../utils/types";
import Email from "../components/Email";

const Faq: NextPage = ({ shopify }: any) => {
	const [products, setProducts] = useState<[ProductType]>();
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
	return (
		<div
			css={css`
				font-family: Montserrat;
			`}
		>
			<Nav localCart={localCart} setLocalCart={setLocalCart} removeLine={removeLine} updateLine={updateLine} />
			<div
				css={css`
					padding-top: 70px;
				`}
			>
				<h2
					css={css`
						margin: 0;
						padding: 40px;
					`}
				>
					FAQs
				</h2>
				<div>
					<FaqInfo title="Product + Ingredients" blocks={[{ heading: "Coming Soon", body: "" }]} />
					<FaqInfo
						title="Shipping + Delivery"
						blocks={[
							{ heading: "How is my order delivered?", body: "No Name Dog Food is delivered frozen in insulated packaging. Don’t worry about being home to accept your order! Just pop the food in the freezer as soon as you can. " },
							{ heading: "When will my order be delivered?", body: "We offer free shipping on all orders over $50.\n\n Shipping on all orders under $50 is $10.\n\n Orders are delivered 2-4 business days from ordering. " },
						]}
					/>
					<FaqInfo
						title="Picky Pup Guarantee"
						blocks={[{ heading: "My dog is really picky!", body: "We’re so confident your pup will love our food, we’ll give you a 100% refund if they aren’t licking their bowls clean.\n\n This is only available on your first order and is limited at $50 AUD, excluding shipping. " }]}
					/>
					<FaqInfo title="No Dice" blocks={[{ heading: "", body: "No luck finding the answer to your question?\n\n Send us an email:\n kevin@nonamedogfood.com.au" }]} />
				</div>
			</div>
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

export default Faq;
